---
title: det dependent
request: |
  pattern { X -[1=det]-> Y; Y [upos <> DET|NUM] }
  without { Y [ExtPos=DET|NUM] }
scope:
  - schema: SUD
level: error
type: valid
---

The dependent of a `det` relations must a `DET`or `NUM` (either at `ExtPos` or a `upos` level).
