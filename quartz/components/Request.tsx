import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function grew_match_path (treebank: string, request : string): string {
  request = request.replace(/\n/g, "%0A");
  request = request.replace(/\+/g, "%2B");
  return `https://universal.grew.fr?corpus=${treebank}&request=${request}`
}

interface Treebank {
  id: string;
  schema: string; 
  lang: string;
  audio?: boolean;
}

const sud : Treebank[] = []
let tbs = require('../../data/mSUD_2.18.json') as Treebank[];
sud.push(...tbs)
tbs = require('../../data/pSUD_2.18.json') as Treebank[];
sud.push(...tbs)
tbs = require('../../data/SUD_2.18_native.json') as Treebank[];
sud.push(...tbs)
tbs = require('../../data/SUD_2.18_converted.json') as Treebank[];
sud.push(...tbs)

interface Scope {
  langs: string[];
  schemas: string[];
}

function build_scope(frontmatter : any) : Scope {
  const langs: string[] = [] 
  const schemas: string[] = [] 
  const lang = frontmatter?.scope?.lang;
  if (typeof (lang) === "string") {
    langs.push(lang)
  } else if (Array.isArray(lang)) {
    langs.push(...lang)
  }
  const schema = frontmatter?.scope?.schema;
  if (typeof (schema) === "string") {
    schemas.push(schema)
  } else if (Array.isArray(schema)) {
    schemas.push(...schema)
  }
  return { langs: langs, schemas: schemas }
}

function scope_to_strings(scope: Scope): string[] {
  const parts: string[] = [];

  if (scope.langs.length > 0) {
    parts.push(`Language${scope.langs.length===1 ? "" : "s"}: ${scope.langs.join(", ")}`);
  }

  if (scope.schemas.length > 0) {
    parts.push(`Schema${scope.schemas.length===1 ? "" : "s"}: ${scope.schemas.join(", ")}`);
  }

  return parts
}

function filter_scope (scope : Scope) {
  const filtered: Treebank[] = []
  sud.map (treebank => {
    if (scope.langs.length === 0 || scope.langs.includes(treebank.lang)) {
      if (scope.schemas.length === 0 || scope.schemas.includes(treebank.schema)) {
        filtered.push(treebank)
      }
    }
  })
  return filtered
}

const Request: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const type = fileData.frontmatter?.type
  if (type && (type === "valid" || type === "doc")) {
    const request : string | unknown = fileData.frontmatter?.request
    // const scope = fileData.frontmatter?.scope
    const scope = build_scope (fileData.frontmatter)

    var badge = ""
    switch(type) {
      case "valid": badge = "Validation Pebble"; break;
      case "doc": badge = "Documentation Pebble"; break;
    }

    if (typeof request === "string") {
      const filtered_treebanks = filter_scope(scope)
      return (
        <div>
          <h3 class="badge">{badge}</h3>
          <ul>
            {scope_to_strings(scope).map((s) => (<li>{s}</li>))}
          </ul>
          <pre>
            <code class="language-grew">{request}</code>
          </pre>
          <br />
          {filtered_treebanks.length} treebank{filtered_treebanks.length>1 ? 's' : ''}
          <br >
          </br>
          <br />
          {filtered_treebanks.length > 5 ? (
          <select
            className="tb-dropdown"
            defaultValue=""
            {...({ onchange: "if(this.value) window.open(this.value,'_blank')" } as any)}
          >
            <option value="" disabled>Select treebank…</option>
              {filtered_treebanks.map((treebank) => (
              <option
                key={treebank.id}
                value={grew_match_path(treebank.id, request)}
              >
                {treebank.id}
              </option>
              ))}
          </select>
          ) : (
          filtered_treebanks.map((treebank) => (
            <span key={treebank.id}>
              <a
                className="tb"
                target="_blank"
                rel="noreferrer"
                href={grew_match_path(treebank.id, request)}
              >
              {treebank.id}
              </a>
            </span>
          ))
        )}
        
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
