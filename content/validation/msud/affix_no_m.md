---
title: Affix without morph-level annotation
request: |-
  pattern { X [form=re"-.+"]|[form=re".+-"] }  % starts or ends with "-"
  without { Y -[type=m]-> X }                  % neither the target of a /m relation
  without { X -[type=m]-> Y }                  % nor the source of a /m relation
scope:
  schema: mSUD
level: error
type: valid
---

Search for a affix without morph-level annotation.
