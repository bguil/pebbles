---
title: Number agreement for Noun modifiers
request: |
  pattern {
    A -[mod]-> B;
    A[upos=NOUN|PRON|PROPN];
    B[upos=ADJ|VERB];
    A.Number <> B.Number
  }
  without {B[Idiom=Yes]}
  without { A.Number = B.CorrectNumber }
  without { A.CorrectNumber = B.Number }
  without { B[VerbForm <> Part, Tense <> Past] }
  without { B[VerbForm = Inf] }
  without { B[ExtPos <> ADJ] }
  without { B -[1=conj]-> * }
  without { A -[1=conj]-> * }
  without { * -[1=conj]-> A }
  without { P1[upos=ADP]; P2[upos=ADP]; P1 -[conj:coord]-> P2; P2 -> A }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

