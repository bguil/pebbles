---
title: Number agreement in predicative construction
request: |
  pattern {
    A -[comp:pred]-> B;
    A -[1=subj]-> C;
    B[upos=ADJ|VERB];
    C.Number <> B.Number
  }
  without { B.Number = C.CorrectNumber }
  without { B.CorrectNumber = C.Number }
  without { B[VerbForm <> Part, Tense <> Past] }
  without { B[VerbForm = Inf] }
  without { A -[1=comp, 2=obj]-> * }
  without { B -[det]-> * }
  without { C -[1=conj]-> * }
  without { C[lemma="vous"|"plupart"|"nombre"|"%"|"majorité"] }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

