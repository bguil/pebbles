---
title: Valid SUD deprel
request: |
  pattern {
    X -[1<>aff|appos|cc|clf|comp|compound|conj|det|discourse|dislocated|flat|goeswith|list|mod|orphan|parataxis|punct|reparandum|root|subj|udep|unk|vocative]-> Y
  }
scope:
  schema: SUD
level: error
type: valid
---

This pebbles check that only regular SUD main dependency relation are used.
It does not check the full relation (with extension and deep features).