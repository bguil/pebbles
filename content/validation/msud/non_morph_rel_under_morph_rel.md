---
title: Only morph rel under morph rel
request: |
  pattern {
    e: N1 -> N2;
    e2: N2 -> N3;
    e.deep = m;
  }
  without { e2.deep=m }
scope:
  schema: mSUD
level: error
type: valid
---

Only the head of a syntactic word can be governor of regulat dependency relations.
