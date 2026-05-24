---
title: Number agreement for past particle
request: |
  pattern {
    A[upos=AUX, lemma="être"];
    A -[1=subj]-> B;
    A -[1=comp,2=aux]-> C;
    C[upos=VERB, VerbForm=Part, Tense=Past];
    C.Number <> B.Number
  }
  without { B.Number = C.CorrectNumber }
  without { B.CorrectNumber = C.Number }
  without { B -[1=conj]-> * }
  without { B[Title=Yes] }
  without { B[lemma=tiers|vous] }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

Note: pronominal verbs are not taken into account.