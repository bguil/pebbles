---
title: upos required
request: pattern { X[form <> "__0__", !upos] }
scope:
  - schema: SUD
level: error
type: valid
---

Each token must have a `upos`.

Note that the anchor node (with `form=__0__`) is not a real token, it is excluded in the pattern.
