---
title: morph annotation without affix (right-headed)
request: |-
  pattern { X -[type=m]-> Y; Y << X }  % there is a head final /m relation
  without  { X [form=re"-.+"] }        % neither the gov is an affix
  without  { Y [form=re".+-"] }        % nor the dependent


scope:
  schema: mSUD
level: error
type: valid
---

Morph-level head final annotation without an explicit affix annotation.