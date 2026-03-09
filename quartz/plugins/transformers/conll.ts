import { QuartzTransformerPlugin } from "../types"
import { Element, Root } from "hast"
import { visit } from "unist-util-visit"

export const Conll: QuartzTransformerPlugin = () => {
  return {
    name: "Conll",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "element", (node: Element) => {
              if (node.tagName === "conll") {
                const color = (node.properties.schema === "ud") ? "rgb(213, 232, 211)" : "#fdf8ed";
                const content = node.children
                .filter((child: any) => child.type === "text")
                .map((child: any) => child.value)
                .join("")
                .trim()

                node.tagName = "div"
                node.properties = {
                  style: `background-color: ${color}; border-radius: 10px; padding: 10px; margin: 15px 0;`
                }
                node.children = [
                  {
                    type: "element",
                    tagName: "reactive-dep-tree",
                    properties: {
                      "shown-metas": "text_en,pinyin",
                      "hidden-features": "MISC.highlight,MISC.SpaceAfter,XPOS,MISC.AlignBegin,MISC.AlignEnd,MISC.wordform,MISC.Cxn,MISC.CxnElt",
                      "interactive": true,
                      "token-spacing": "20",
                      "conll": content
                    },
                    children: []
                  }
                ]
              }
            })
          }
        }
      ]
    },
    externalResources() {
      return {
        css: [
          {
            content: "/static/css/prism.css",
            spaPreserve: true,
          },

        ],
        js: [
          {
            src: "https://unpkg.com/reactive-dep-tree/dist/reactive-dep-tree.umd.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            src: "/static/js/prism.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            src: "/static/js/prism_grew.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            script: `document.addEventListener("nav", () => { if (window.Prism) window.Prism.highlightAll(); })`,
            loadTime: "afterDOMReady",
            contentType: "inline",
            spaPreserve: true,
          },
        ],
      }
    },
  }
}

export default Conll
