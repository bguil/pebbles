---
title:  Shared
request: pattern { X [Shared] }
scope:
  - schema: SUD
type: doc
tags: 
 - coordinating-conjunction
 - feature
---

Left dependents on coordination are attached to the head of the coordination. Since the head of a coordination is the head of the leftmost conjunct, it is not possible to distinguish these dependents from the own dependents of the leftmost conjunct.

Right dependents on a coordination are attached to the head of the rightmost conjunct, but they can be confused with the own dependents of this conjunct.

As a consequence, left and right dependents on a coordination are marked with feature `Shared=Yes`, which distinguishes them from the own dependents of the respective leftmost and rightmost conjuncts.


<conll>
# sent_id = fr-ud-train_02779
# text = Elle a écrit ou co-écrit 21 articles.
# text_en = She has written or co-written 21 articles.
1	Elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	wordform=elle
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	écrit	écrire	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	2	comp:aux@tense	_	Tense[denom]=Past
4	ou	ou	CCONJ	_	_	5	cc	_	_
5	co-écrit	co-écrire	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	conj:coord	_	Tense[denom]=Past
6	21	21	NUM	_	ExtPos=DET	7	det	_	Number[lex]=Plur
7	articles	article	NOUN	_	Number=Plur|Shared=Yes	5	comp:obj	_	Gender[lex]=Masc|SpaceAfter=No|highlight=red
8	.	.	PUNCT	_	_	2	punct	_	_
</conll>

<conll>
# sent_id = fr-ud-dev_00823
# text = Puis viens et suis-moi !
1	Puis	puis	CCONJ	_	_	2	cc	_	wordform=puis
2	viens	venir	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	et	et	CCONJ	_	_	4	cc	_	_
4	suis	suivre	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj:coord	_	SpaceAfter=No
5	-moi	moi	PRON	_	Emph=No|Number=Sing|Person=1|PronType=Prs|Shared=No	4	comp:obj	_	highlight=red
6	!	!	PUNCT	_	_	2	punct	_	_
</conll>
