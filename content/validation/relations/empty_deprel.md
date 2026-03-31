---
title: Empty deprel
request: |
  pattern { X -[!1]-> Y }
scope:
  schema: SUD
level: error
type: valid
---

The deprel cannot be defined without a basic relation.
