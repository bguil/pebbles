---
title: Number agreement with object attribute
request: |
  pattern {
    A -[comp:pred]-> B;
    A -[comp:obj]-> C;
    B[upos=ADJ|VERB];
    C.Number <> B.Number
  }
  without { B.Number = C.CorrectNumber }
  without { B.CorrectNumber = C.Number }
  without { B[VerbForm <> Part, Tense <> Past] }
  without { B[VerbForm = Inf] }
  without { B -[det]-> * }
  without { C -[1=conj]-> * }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

