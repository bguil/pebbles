---
title: subj@expl
request: pattern { X -[subj@expl]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Expletive subject

The `subj@expl` relation indicates that the subject is present to fill in an obligatory syntactic position but it has no semantic content (see [`@expl`](guidelines/deep_features/expl.md)).

<conll>
# lang = French
# sent = Il pleut dans ma maison
# text_en = It's raining in my house
1	Il	il	PRON	_	_	2	subj@expl	_	Gloss=it
2	pleut	pleuvoir	VERB	_	_	0	root	_	Gloss=rains
3	dans	dans	ADP	_	_	2	mod	_	Gloss=in
4	ma	son	DET	_	_	5	det	_	Gloss=my
5	maison	maison	NOUN	_	_	3	comp:obj	_	Gloss=house
</conll>
