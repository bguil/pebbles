---
title: Number agreement for past particle before
request: |
  pattern {
    A[upos=VERB, VerbForm=Part, Tense=Past];
    A -[1=comp,2=obj]-> B;
    B << A;
    A.Number <> B.Number
  }
  without { A.Number = B.CorrectNumber }
  without { A.CorrectNumber = B.Number }
  without { B -[1=conj]-> * }
  without { B[Title=Yes] }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---
