---
title: Discontinuous idiom
request: |
  pattern { e: M -> N; N [InIdiom]; X[!InIdiom, !Idiom]; X << e }
scope:
  schema: SUD
level: error
type: valid
---

Discontinuous idiom (node `X` is in the span but is not included).