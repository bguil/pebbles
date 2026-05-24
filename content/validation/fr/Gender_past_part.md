---
title: Gender agreement for past particle
request: |
  pattern {
    A[upos=AUX, lemma = "être"];
    A -[1=subj]-> B;
    A -[1=comp,2=aux]-> C;
    C[upos=VERB, VerbForm=Part, Tense=Past];
    C.Gender <> B.Gender
  }
  without { B.Gender = C.CorrectGender }
  without { B.CorrectGender = C.Gender }
  without { B -[1=conj]-> * }
  without { B[Title=Yes] }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

Note: pronominal verbs are not taken into account.