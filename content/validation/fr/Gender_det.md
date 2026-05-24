---
title: Gender agreement for determiners
request: |
  pattern {
    A -[det]-> B;
    A.Gender <> B.Gender
  }
  without{A[Title=Yes]}
  without { A.Gender = B.CorrectGender }
  without { A.CorrectGender = B.Gender }
  without { B -[1=conj]-> * }
  without { A -[1=conj]-> * }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

