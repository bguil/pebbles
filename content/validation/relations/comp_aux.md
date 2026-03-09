---
title: comp:aux governor
request: |
  pattern { X -[1=comp,2=aux]-> Y; X [upos <> AUX] }
scope:
  - schema: SUD
level: error
type: valid
---

`comp:aux` (and extensions) relations must have `upos=AUX` on the governor.


