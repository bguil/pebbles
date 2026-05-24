---
title: Missing InIdiom
request: |
  pattern { N [Idiom=Yes] }
  without { N -> M; M [InIdiom=Yes]}
scope:
  schema: SUD
level: error
type: valid
---

`Idiom=Yes` cannot have no dependent with `InIdiom=Yes`.