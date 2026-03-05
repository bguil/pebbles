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
                const content = node.children
                .filter((child: any) => child.type === "text")
                .map((child: any) => child.value)
                .join("")
                .trim()

                node.tagName = "div"
                node.properties = {
                  style: "background-color: #fdf8ed; border-radius: 10px; padding: 10px; margin: 15px 0;"
                }
                node.children = [
                  {
                    type: "element",
                    tagName: "reactive-dep-tree",
                    properties: {
                      "shown-metas": "text_en,pinyin",
                      "hidden-features": "MISC.highlight,MISC.SpaceAfter,XPOS",
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
            // TODO: this is related to Request component and should be declared somewhere else
            content: "../static/css/prism.css",
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
            // TODO: this is related to Request component and should be declared somewhere else
            src: "../static/js/prism.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            // TODO: this is related to Request component and should be declared somewhere else
            src: "../static/js/prism_grew.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
        ],
      }
    }, 
  }
}

export default Conll
