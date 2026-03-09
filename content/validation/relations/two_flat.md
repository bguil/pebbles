---
title: Two flat
request: |
  pattern { X -[1=flat]-> X1; X -[1=flat]-> X2; X1 << X2; }
scope:
  - schema: SUD
level: error
type: valid
---

Should not have two `flat` relations with the same governor.
SUD used chained annotation.


<Conll>
6	neuf	neuf	NUM	_	ExtPos=DET|NumType=Card	9	mod	_	Number[lex]=Plur
7	cent	cent	NUM	_	NumType=Card	6	flat	_	_
8	vingt	vingt	NUM	_	NumType=Card	7	flat	_	_
9	photos	photo	NOUN	_	Number=Plur	0	root	_	Gender[lex]=Fem
</Conll>
