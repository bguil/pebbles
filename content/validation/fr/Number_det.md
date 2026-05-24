---
title: Number agreement for determiners
request: |
  pattern {
    A -[det]-> B;
    A.Number <> B.Number
  }
  without{A[Title=Yes]}
  without { A.Number = B.CorrectNumber }
  without { A.CorrectNumber = B.Number }
  without { B -[1=conj]-> * }
  without { A -[1=conj]-> * }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

