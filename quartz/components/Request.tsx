import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Request: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const request = fileData.frontmatter?.request
  if (request) {
    return (
      <div>
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
`

export default (() => Request) satisfies QuartzComponentConstructor
