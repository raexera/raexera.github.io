import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import icon from "astro-icon";
import astroExpressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";
import rehypeMermaid from "rehype-mermaid";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://raexera.is-a.dev",
  integrations: [
    react(),
    icon(),
    sitemap(),
    astroExpressiveCode({
      themes: ["github-light", "github-dark"],
      useDarkModeMediaQuery: false,
      themeCssRoot: ":root",
      themeCssSelector: (theme) => (theme.name === "dark" ? ".dark" : false),
      customizeTheme: (theme) => {
        theme.name = theme.name === "github-dark" ? "dark" : "light";
        return theme;
      },
      defaultProps: {
        wrap: true,
        frame: "code",
      },
      frames: {
        extractFileNameFromCode: false,
        showCopyToClipboardButton: true,
      },
      styleOverrides: {
        borderRadius: "0.75rem",
        borderWidth: "1px",
        borderColor: "var(--border)",
        codeBackground: "var(--muted)",
        codeForeground: "var(--foreground)",
        codeFontFamily:
          'ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        codeFontSize: "0.875rem",
        codeLineHeight: "1.7",
        codePaddingBlock: "1rem",
        codePaddingInline: "1.25rem",
        frames: {
          frameBoxShadowCssValue: "none",
          editorTabBarBackground: "var(--muted)",
          editorTabBarBorderColor: "var(--border)",
          editorTabBarBorderBottomColor: "var(--border)",
          editorActiveTabBackground: "transparent",
          editorActiveTabForeground: "var(--muted-foreground)",
          editorActiveTabBorderColor: "transparent",
          editorActiveTabIndicatorTopColor: "transparent",
          editorActiveTabIndicatorBottomColor: "transparent",
          editorBackground: "var(--muted)",
        },
      },
    }),
  ],
  markdown: {
    processor: unified({
      gfm: true,
      smartypants: true,
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy: "inline-svg",
            mermaidConfig: {
              theme: "base",
              themeVariables: {
                background: "transparent",
                primaryColor: "transparent",
                primaryTextColor: "#0a0a0a",
                primaryBorderColor: "#737373",
                lineColor: "#737373",
                fontSize: "18px",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              },
              flowchart: {
                nodeSpacing: 30,
                rankSpacing: 40,
                padding: 10,
              },
            },
          },
        ],
      ],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
