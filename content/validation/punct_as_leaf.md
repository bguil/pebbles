---
title: punct_as_leaf
request: |
  pattern { 
    X -[punct]-> Y;   %  If Y is a punct dependent
    Y -[^punct]-> Z   %  It must be a leaf (except with another punct deprel) 
  }
scope:
  - schema: SUD
level: error
type: valid
---

The `punct` deprel should end with a leaf, with a few exceptions for notation like *(…)* (see example aboce), where a `punct` can be followed by a `punct`. Any other relation is prohibited.

> **SUD_French-Sequoia**:

<Conll>
# sent_id = frwiki_50.1000_00378
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Mis	mettre	VERB	_	_	0	mod	_	_
3	en	en	ADP	_	_	2	comp:obl	_	_
4	place	place	NOUN	_	_	3	comp:obj	_	_
5	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	...	...	PUNCT	_	_	2	punct	_	SpaceAfter=No
7	)	)	PUNCT	_	_	6	punct	_	_
<Conll>
