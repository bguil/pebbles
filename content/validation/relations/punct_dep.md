---
title: punct dependent
request: |
  pattern { X -[punct]-> Y; Y [upos <> PUNCT] }
scope:
  schema: SUD
level: error
type: valid
---

The dependent of a `punct` relation must have `upos=PUNCT`.