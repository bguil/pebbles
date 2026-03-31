---
title:  cc
request: pattern { X -[1=cc]-> Y }
scope:
  schema: SUD
type: doc
tags: 
 - coordinating-conjunction
 - deprel
---

The `cc` relation is used between a conjunct and an associated coordinating conjunction. 

It is, in most of the cases, used with the relation [`conj:coord`](conj_coord).

### French
<conll>
# sent_id = fr-ud-train_07737
# text = Des chambres spacieuses et propres.
# text_en = Spacious and clean rooms.
1	Des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	2	det	_	wordform=des
2	chambres	chambre	NOUN	_	Number=Plur	0	root	_	Gender[lex]=Fem|Gloss=rooms
3	spacieuses	spacieux	ADJ	_	Gender=Fem|Number=Plur	2	mod	_	Gloss=spacious
4	et	et	CCONJ	_	_	5	cc	_	Gloss=and|highlight=red
5	propres	propre	ADJ	_	Number=Plur	3	conj:coord	_	Gender[ctxt]=Fem|SpaceAfter=No|Gloss=clean|highlight=red
6	.	.	PUNCT	_	_	2	punct	_	_
</conll>



> [!tips]
> See also a global view of `cc` usage in the last release (2.17) in this [table](http://tables.grew.fr/?data=sud_deps/cc).