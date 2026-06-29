---
title: mod@relcl
request: pattern { X -[mod@relcl]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Relative clauses

The `mod@relcl` relation is used for relative clauses (see [`@relcl`](guidelines/deep_features/relcl.md)).

<conll>
# lang = English
# sent_id = newsgroup-groups.google.com_Meditation20052_06390a5f75b2e1f2_ENG_20050316_091700-0045
# newpar id = newsgroup-groups.google.com_Meditation20052_06390a5f75b2e1f2_ENG_20050316_091700-p0008
# text = Another thing you can try.
1	Another	another	DET	DT	PronType=Ind	2	det	_	_
2	thing	thing	NOUN	NN	Number=Sing	0	root	_	highlight=red
3	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	4	subj	_	_
4	can	can	AUX	MD	VerbForm=Fin	2	mod@relcl	_	highlight=red
5	try	try	VERB	VB	VerbForm=Inf	4	comp:aux	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_
</conll>

> [!info]
> This relation is used in most SUD treebanks. See [SUD treebanks `mod@relcl`](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^mod@relcl$)
