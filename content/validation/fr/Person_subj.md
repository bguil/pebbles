---
title: Person agreement for subject relation
request: |
  pattern {
    A[upos=AUX|VERB];
    A -[1=subj]-> B;
    A.Person <> B.Person
  }
  without { A.Person = B.CorrectPerson }
  without { A.CorrectPerson = B.Person }
  without { B -[1=conj]-> * }
  without { B[Title=Yes] }
scope:
  schema: SUD
  lang: fr
level: warning
type: valid
---

