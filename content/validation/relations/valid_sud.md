---
title: Valid SUD deprel
request: |
  pattern { 
    X -[1<>aff|appos|cc|clf|comp|compound|conj|det|discourse|dislocated|flat|goeswith|list|mod|orphan|parataxis|punct|reparandum|root|subj|udep|unk|vocative]-> Y
  }
scope:
  - schema: SUD
level: error
type: valid
---

Non valid SUD relations.