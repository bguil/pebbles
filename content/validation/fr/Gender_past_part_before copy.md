---
title: Number agreement for past particle before
request: |
  pattern {
    A[upos=VERB, VerbForm=Part, Tense=Past];
    A -[1=comp,2=obj]-> B;
    B << A;
    A.Gender <> B.Gender
  }
  without { A.Gender = B.CorrectGender }
  without { A.CorrectGender = B.Gender }
  without { B -[1=conj]-> * }
  without { B[Title=Yes] }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---
