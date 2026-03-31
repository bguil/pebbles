---
title: Subj governor
request: |
  pattern { X -[subj]-> Y; X[upos <> VERB|AUX] }
  without { X[ExtPos=VERB|AUX] }
scope:
  schema: SUD
level: warning
type: valid
---

The governor of a `subj` relation should be a verb or an auxiliary.