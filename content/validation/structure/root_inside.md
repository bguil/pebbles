---
title: Root inside
request: |
  pattern { 
    X[form <> "__0__"];
    X -[1=root]-> Y;
  }
scope:
  schema: SUD
level: error
type: valid
---

The `root` deprel cannot be used inside a tree (i.e. with a governor `X` which is not the anchor).

