---
title: Number agreement for subject relation
request: |
  pattern {
    A[upos=AUX|VERB];
    A -[1=subj]-> B;
    A.Number <> B.Number
  }
  without { A.Number = B.CorrectNumber }
  without { A.CorrectNumber = B.Number }
  without { B -[1=conj]-> * }
  without { B[Title=Yes] }
  without { B[lemma = "majorité"|"nombre"|"plupart"|"ensemble"|"éventail"|"%"|"pourcentage"|"cinquantaine"|"tiers"|"partie"|"moitié"] }
  without { B[lemma = ce]; A[form=sont] }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

