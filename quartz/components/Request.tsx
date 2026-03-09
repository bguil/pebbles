import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Request: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const type = fileData.frontmatter?.type
  if (type && (type === "valid" || type === "doc")) {
    const request = fileData.frontmatter?.request
    var badge = ""
    switch(type) {
      case "valid": badge = "Validation Pebble"; break;
      case "doc": badge = "Documentation Pebble"; break;
    } 
    if (request) {
      return (
        <div>
        <h3 class="badge">{badge}</h3>
        <pre>
        <code class="language-grew">{request}</code>
        </pre>
        </div>
      )
      
    } else {
      return (
        <div>
        <span class={classNames(displayClass, "warning-msg")}>
        Invalid pebble: No request found in frontmatter
        </span>
        </div>
      )
    }
  }
}

// note: display: block required to have nice display of the pattern
Request.css = `
.language-grew {
  display: block
}
.warning-msg {
  margin: 2rem 0 0 0;
  color: #F00;
  font-size: x-large;
}
.badge {
  background-color: #6ab2b5;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
} 
`

export default (() => Request) satisfies QuartzComponentConstructor
