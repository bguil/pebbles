---
title: A foreign node should have a `Lang` feature
request: |-
  pattern { N[Foreign, !Lang] }
scope:
  schema: SUD
level: warning
type: valid
---

As far as possible, when a token has the feature `Foreign=Yes`, it should also have a `Lang` feature which tells from which language the foreign word is borrowed.

> [!info]
> See also: https://universaldependencies.org/foreign.html