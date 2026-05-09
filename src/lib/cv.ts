import cv from "@cv";

export const generatePDF = async () => {
  const { basics, work, education, skills } = cv;

  const pdfMakeModule = await import("pdfmake/build/pdfmake");
  const pdfFontsModule = await import("pdfmake/build/vfs_fonts");

  const pdfMake = pdfMakeModule.default || pdfMakeModule;
  const pdfFonts = pdfFontsModule.default || pdfFontsModule;

  pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const docDefinition = {
    pageSize: "A4",
    pageMargins: [40, 40, 40, 40] as [number, number, number, number],
    content: [
      // Header
      { text: basics.name.toUpperCase(), style: "header" },
      {
        text: `${basics.location.city}, ${basics.location.countryCode}  |  ${basics.socials.map((s: any) => s.url.replace("https://", "").replace("mailto:", "")).join("  |  ")}`,
        style: "subHeader",
      },

      // Summary
      { text: "SUMMARY", style: "sectionTitle" },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }],
      },
      { text: basics.summary, margin: [0, 5, 0, 15] },

      // Experience
      { text: "EXPERIENCE", style: "sectionTitle" },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }],
      },
      ...work
        .map((w: any) => [
          {
            columns: [
              { text: w.position, style: "jobTitle" },
              {
                text: `${formatDate(w.startDate)} - ${formatDate(w.endDate)}`,
                style: "dateRight",
              },
            ],
            margin: [0, 5, 0, 2],
          },
          { text: `${w.name} - ${w.location}`, style: "jobCompany" },
          w.summary ? { text: w.summary, margin: [0, 2, 0, 4] } : null,
          w.responsibilities
            ? { ul: w.responsibilities, margin: [10, 0, 0, 10] }
            : null,
        ])
        .flat()
        .filter(Boolean),

      // Education
      { text: "EDUCATION", style: "sectionTitle" },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }],
      },
      ...education
        .map((e: any) => [
          {
            columns: [
              { text: e.institution, style: "jobTitle" },
              {
                text: `${formatDate(e.startDate)} - ${formatDate(e.endDate)}`,
                style: "dateRight",
              },
            ],
            margin: [0, 5, 0, 2],
          },
          { text: `${e.studyType} in ${e.area}`, style: "jobCompany" },
          e.summary ? { text: e.summary, margin: [0, 0, 0, 10] } : null,
        ])
        .flat()
        .filter(Boolean),

      // Skills
      { text: "SKILLS", style: "sectionTitle" },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }],
      },
      {
        ul: [
          `Programming Languages: ${skills.programming_languages.join(", ")}`,
          `Cloud Platforms: ${skills.cloud_platforms.join(", ")}`,
          `Orchestration & IaC: ${skills.infrastructure_devops.orchestration.join(", ")}, ${skills.infrastructure_devops.iac.join(", ")}`,
          `CI/CD & OS: ${skills.infrastructure_devops.ci_cd.join(", ")}, ${skills.infrastructure_devops.os.join(", ")}`,
          `Observability & Security: ${skills.observability_security.monitoring_alerting.join(", ")}`,
        ],
        margin: [0, 5, 0, 15],
      },
    ],

    defaultStyle: {
      fontSize: 10,
      lineHeight: 1.2,
      color: "#1a1a1a",
    },
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: "center",
        margin: [0, 0, 0, 4] as [number, number, number, number],
      },
      subHeader: {
        fontSize: 9,
        alignment: "center",
        color: "#666666",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      sectionTitle: {
        fontSize: 11,
        bold: true,
        margin: [0, 10, 0, 4] as [number, number, number, number],
        color: "#000000",
      },
      jobTitle: { fontSize: 11, bold: true },
      jobCompany: {
        fontSize: 10,
        italics: true,
        color: "#444444",
        margin: [0, 0, 0, 4] as [number, number, number, number],
      },
      dateRight: { alignment: "right", fontSize: 10, color: "#666666" },
    },
  };

  pdfMake
    .createPdf(docDefinition)
    .download(`${basics.name.replace(/\s+/g, "_")}_CV.pdf`);
};
