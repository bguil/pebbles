---
title: Root deprel
request: |
  pattern { ANCHOR [form="__0__"] }
  without { ANCHOR -[1=root]-> X }
scope:
  - schema: SUD
level: error
type: valid
---

The root node of the tree must be attached to the anchor node with a  `root` deprel (maybe with extension, see example in [[single_root]])
