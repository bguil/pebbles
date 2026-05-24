---
title: Gender agreement in predicative construction
request: |
  pattern {
    A -[comp:pred]-> B; 
    A -[1=subj]-> C;
    B[upos=ADJ|VERB];
    C.Gender <> B.Gender
  }
  without { B.Gender = C.CorrectGender }
  without { B.CorrectGender = C.Gender }
  without { B[VerbForm <> Part, Tense <> Past] }
  without { B[VerbForm = Inf] }
  without { A -[1=comp, 2=obj]-> * }
  without { B -[det]-> * }
  without { C -[1=conj]-> * }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

