---
title: Two objects
request: |
  pattern { X -[comp:obj]-> X1; X -[comp:obj]-> X2; X1 << X2; }
  without { X[Idiom=Yes]}
scope:
  - schema: SUD
level: warning
type: valid
---

Shoud not have two `comp:obj` relations with the same governor.