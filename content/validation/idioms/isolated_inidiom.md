---
request: |
  pattern { M -> N; N[InIdiom=Yes] }
  without { M[InIdiom=Yes] }
  without { M[Idiom=Yes] }
scope:
  schema: SUD
level: error
type: valid
---

The governor of `InIdiom` is not in an idiom.