---
title: Two subjects
request: |
  pattern { X -[1=subj]-> X1; X -[1=subj]-> X2; X1 << X2; }
  without { X -[subj@expl]-> X1}
  without { X -[subj@expl]-> X2}
scope:
  schema: SUD
level: warning
type: valid
---

Should not have two `subj` relations with the same governor (except with expletives).

An example with expletive:

<conll>
# sent_id = fr-ud-train_12529
# text = Ces chiffres sont-ils élevés ?
1	Ces	ce	DET	_	Number=Plur|PronType=Dem	2	det	_	wordform=ces
2	chiffres	chiffre	NOUN	_	Number=Plur	3	subj	_	Gender[lex]=Masc
3	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=3:Interrogative-Polar-Direct.Clause|SpaceAfter=No
4	-ils	lui	PRON	_	Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	subj@expl	_	wordform=ils
5	élevés	élevé	ADJ	_	Gender=Masc|Number=Plur	3	comp:pred	_	_
6	?	?	PUNCT	_	_	3	punct	_	_
</conll>