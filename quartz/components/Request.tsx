import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function grew_match_path (treebank: String, request : String): String {
  request = request.replace(/\n/g, "%0A");
  request = request.replace(/\+/g, "%2B");
  return `https://universal.grew.fr?corpus=${treebank}&request=${request}`
}

const sud_treebanks = {
  "bej": [
    "mSUD_Beja-Autogramm@latest"
  ],
  "fsl": [
    "SUD_French_Sign_Language-STKAutogramm@latest"
  ],
  "hau": [
    "SUD_Hausa-SouthernAutogramm@latest",
    "SUD_Hausa-NorthernAutogramm@latest",
    "SUD_Hausa-EasternAutogramm@latest",
    "SUD_Hausa-WesternAutogramm@latest",
  ]
}

function name(tb : string) : string {
  const n = tb.split("-")[1]
  return `${n}`
}

const Request: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const type = fileData.frontmatter?.type
  if (type && (type === "valid" || type === "doc")) {
    const request = fileData.frontmatter?.request
    var badge = ""
    switch(type) {
      case "valid": badge = "Validation Pebble"; break;
      case "doc": badge = "Documentation Pebble"; break;
    }
    var treebanks : string[] = []
    const lang = fileData.frontmatter?.scope["lang"];
    if (lang && lang in sud_treebanks) {
      treebanks = sud_treebanks[lang]
    }

    if (request) {
      return (
        <div>
          <h3 class="badge">{badge}</h3>
          <pre>
            <code class="language-grew">{request}</code>
          </pre>
            {treebanks.map((treebank) => (
              <span>
                <a class="tb" target="_blank" href={grew_match_path(treebank, request)}>
                  {name(treebank)}
                </a>
              </span>
            ))}
            <hr></hr>
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
.tb {
  background-color: #5d916a;
  font-size: x-small;
  margin: 5px; 
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
} 
`

export default (() => Request) satisfies QuartzComponentConstructor
