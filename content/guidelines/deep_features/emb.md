---
title: "@emb"
request: pattern { X -[deep=emb]-> Y }
scope:
  - schema: SUD
type: doc
tags: 
 - coordinating-conjunction
 - deep-feature
---

# `@emb`: Embedded Coordination

The deep feature `@emb` is used only with the relation [`conj:coord`](guidelines/deprel/conj_coord) to mark embedded coordination.

> [!tips] See [construction page about coordination](guidelines/construction/coordination) for more details.

<Conll>
# text = John, Mary or her brother and Peter will come
1	John	John	PROPN	_	_	9	subj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mary	Mary	PROPN	_	_	1	conj:coord	_	highlight=red
4	or	or	CCONJ	_	_	6	cc	_	_
5	her	her	DET	_	_	6	det	_	_
6	brother	brother	NOUN	_	_	3	conj:coord@emb	_	highlight=red
7	and	and	CCONJ	_	_	8	cc	_	_
8	Peter	Peter	PROPN	_	_	6	conj:coord	_	_
9	will	will	AUX	_	_	0	root	_	_
10	come	come	VERB	_	_	9	comp:aux	_	_
</Conll>
