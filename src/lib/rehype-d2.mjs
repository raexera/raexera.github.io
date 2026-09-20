import { visit } from "unist-util-visit";
import { fromHtml } from "hast-util-from-html";
import { D2 } from "@d2lang/d2";

let d2;

function getD2() {
  if (!d2) {
    d2 = new D2();
  }
  return d2;
}

function isD2Code(node) {
  return (
    node.tagName === "code" &&
    Array.isArray(node.properties?.className) &&
    node.properties.className.includes("language-d2")
  );
}

function getText(node) {
  let text = "";
  const walk = (child) => {
    if (child.type === "text") {
      text += child.value;
    }
    for (const grandchild of child.children ?? []) {
      walk(grandchild);
    }
  };
  for (const child of node.children ?? []) {
    walk(child);
  }
  return text.trim();
}

export default function rehypeD2(options = {}) {
  const { layout = "tala", themeID = 1, pad = 20 } = options;

  return async (tree) => {
    const targets = [];

    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "pre" || !Array.isArray(node.children)) {
        return;
      }
      const code = node.children.find(isD2Code);
      if (code) {
        targets.push({ code, index, parent });
      }
    });

    for (const { code, index, parent } of targets) {
      const source = getText(code);
      if (!source) {
        continue;
      }

      try {
        const instance = getD2();
        const { diagram } = await instance.compile(source, { layout });
        const svg = await instance.render(diagram, {
          themeID,
          noXMLTag: true,
          pad,
        });

        const parsed = fromHtml(svg, { fragment: true });
        const svgNode = parsed.children?.[0] ?? parsed;

        const wrapper = {
          type: "element",
          tagName: "div",
          properties: { className: ["d2-diagram"] },
          children: [svgNode],
        };

        if (parent && typeof index === "number") {
          parent.children[index] = wrapper;
        }
      } catch (error) {
        console.error("[rehype-d2] failed to render diagram:", error);
      }
    }
  };
}
