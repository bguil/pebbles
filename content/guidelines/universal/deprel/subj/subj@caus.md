---
title: subj@caus
request: pattern { X -[subj@caus]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Causative subject

The `subj@caus` relation is used for subject in causative construction (see [`@caus`](guidelines/deep_features/caus.md)).

<conll>
# lang = French
# text = et donc, je le fais même rentrer dans la maison
# text_en = and then, I even let him enter the house
1	et	et	CCONJ	_	_	6	cc	_	_
2	donc	donc	ADV	_	_	6	mod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	subj@caus	_	_
5	le	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	comp:obj@agent	_	_
6	fais	faire	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	même	même	ADV	_	_	6	mod	_	_
8	rentrer	rentrer	VERB	_	VerbForm=Inf	6	comp:aux@caus	_	Subject=ObjRaising
9	dans	dans	ADP	_	_	8	comp:obl	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	maison	maison	NOUN	_	Gender=Fem|Number=Sing	9	comp:obj	_	SpaceAfter=No
</conll>

> [!info]
> This relation is used mainly in French and in Armenian. See [SUD treebanks `subj@caus`](https://tables.grew.fr/?data=sud_deps/DEPS&cols=subj@caus)
