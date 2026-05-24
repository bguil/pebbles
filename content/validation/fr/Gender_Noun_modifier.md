---
title: Gender agreement for Noun modifiers
request: |
  pattern {
    A -[mod]-> B;
    B[upos=ADJ|VERB];
    A.Gender <> B.Gender
  }
  without {B[Idiom=Yes]}
  without { A.Gender = B.CorrectGender }
  without { A.CorrectGender = B.Gender }
  without { B[VerbForm <> Part, Tense <> Past] }
  without { B[VerbForm = Inf] }
  without { B[ExtPos <> ADJ] }
  without { B -[1=conj]-> * }
  without { A -[1=conj]-> * }
  without { * -[1=conj]-> A}
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

