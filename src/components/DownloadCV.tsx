import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import cv from "@cv";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1a1a1a",
    lineHeight: 1.2,
  },
  header: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 9,
    textAlign: "center",
    color: "#666666",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginTop: 10,
    marginBottom: 4,
    color: "#000000",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  summaryText: {
    marginTop: 5,
    marginBottom: 15,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  dateRight: {
    fontSize: 10,
    color: "#666666",
    textAlign: "right",
  },
  jobCompany: {
    fontSize: 10,
    fontFamily: "Helvetica-Oblique",
    color: "#444444",
    marginBottom: 4,
  },
  entrySummary: {
    marginTop: 2,
    marginBottom: 4,
  },
  bulletList: {
    marginLeft: 10,
    marginBottom: 10,
  },
  bulletRow: {
    flexDirection: "row",
  },
  bullet: {
    width: 12,
  },
  bulletText: {
    flex: 1,
  },
  skillsList: {
    marginTop: 5,
    marginBottom: 15,
  },
});

const formatDate = (dateString: string | null) => {
  if (!dateString) return "Present";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const ResumeDocument = () => {
  const { basics, work, education, skills } = cv;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.header}>{basics.name.toUpperCase()}</Text>
        <Text style={styles.subHeader}>
          {basics.location.city}, {basics.location.countryCode} |{" "}
          {basics.socials
            .map((s: any) =>
              s.url.replace("https://", "").replace("mailto:", ""),
            )
            .join("  |  ")}
        </Text>

        {/* Summary */}
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <View style={styles.line} />
        <Text style={styles.summaryText}>{basics.summary}</Text>

        {/* Experience */}
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        <View style={styles.line} />
        {work.map((w: any, i: number) => (
          <View key={i}>
            <View style={styles.entryHeader}>
              <Text style={styles.jobTitle}>{w.position}</Text>
              <Text style={styles.dateRight}>
                {formatDate(w.startDate)} - {formatDate(w.endDate)}
              </Text>
            </View>
            <Text style={styles.jobCompany}>
              {w.name} - {w.location}
            </Text>
            {w.summary && <Text style={styles.entrySummary}>{w.summary}</Text>}
            {w.responsibilities && (
              <View style={styles.bulletList}>
                {w.responsibilities.map((r: string, j: number) => (
                  <View key={j} style={styles.bulletRow}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{r}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View style={styles.line} />
        {education.map((e: any, i: number) => (
          <View key={i}>
            <View style={styles.entryHeader}>
              <Text style={styles.jobTitle}>{e.institution}</Text>
              <Text style={styles.dateRight}>
                {formatDate(e.startDate)} - {formatDate(e.endDate)}
              </Text>
            </View>
            <Text style={styles.jobCompany}>
              {e.studyType} in {e.area}
            </Text>
            {e.summary && <Text style={{ marginBottom: 10 }}>{e.summary}</Text>}
          </View>
        ))}

        {/* Skills */}
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.line} />
        <View style={styles.skillsList}>
          <View style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              Programming Languages: {skills.programming_languages.join(", ")}
            </Text>
          </View>
          <View style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              Cloud Platforms: {skills.cloud_platforms.join(", ")}
            </Text>
          </View>
          <View style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              Orchestration & IaC:{" "}
              {skills.infrastructure_devops.orchestration.join(", ")},{" "}
              {skills.infrastructure_devops.iac.join(", ")}
            </Text>
          </View>
          <View style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              CI/CD & OS: {skills.infrastructure_devops.ci_cd.join(", ")},{" "}
              {skills.infrastructure_devops.os.join(", ")}
            </Text>
          </View>
          <View style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              Observability & Security:{" "}
              {skills.observability_security.monitoring_alerting.join(", ")}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default function DownloadCVButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${cv.basics.name.replace(/\s+/g, "_")}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="group flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-muted-foreground transition-all hover:border-border/80 hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50 sm:h-10"
    >
      {!isGenerating && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 transition-transform group-hover:-translate-y-0.5"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )}
      <span>{isGenerating ? "Generating..." : "Download CV"}</span>
    </button>
  );
}
