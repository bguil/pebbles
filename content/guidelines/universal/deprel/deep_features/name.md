---
title: "@name"
request: pattern { X -[deep=name]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deep-feature
---


# `@name`

## Universal
The deep feature `@name` is used in combination with the `flat` relation, moslty in proper nouns.
See [table](https://tables.grew.fr/?data=sud_deps/DEPS&cols=@name) for the use of `flat@name` in SUD.

<conll>
# lang = Finnish
# sent_id = w01142031
# text = Juhana Gent kuoli vuonna 1399.
# text_en = John of Gaunt died in 1399.
1	Juhana	Juhana	PROPN	_	Case=Nom|Number=Sing	3	subj	_	highlight=red
2	Gent	Gent	PROPN	_	Case=Nom|Number=Sing	1	flat@name	_	highlight=red
3	kuoli	kuolla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	vuonna	vuosi	NOUN	_	Case=Ess|Number=Sing	3	udep	_	_
5	1399	1399	NUM	_	NumType=Card	4	mod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_
</conll>

<conll>
# lang = French
# text = c'est euh ça s'appelle Casela Aventures.
# text_en = it is um it is called Casela Aventures.
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	subj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	subj	_	_
5	s'	se	PRON	_	Person=3|PronType=Prs	6	comp@expl	_	InIdiom=Yes|SpaceAfter=No
6	appelle	appeler	VERB	_	ExtPos=VERB|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj:dicto	_	Idiom=Yes
7	Casela	Casela	PROPN	_	_	6	comp:obj	_	highlight=red
8	Aventures	aventures	PROPN	_	_	7	flat@name	_	SpaceAfter=No|highlight=red
9	.	.	PUNCT	_	_	2	punct	_	_
</conll>








