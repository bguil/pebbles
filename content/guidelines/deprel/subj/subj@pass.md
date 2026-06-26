---
title: subj@pass
request: pattern { X -[subj@pass]-> Y }
scope:
  schema: SUD
type: doc
tags: 
 - deprel
---

# Passive subject

The relation `subj@pass` is used to indicate a subject in a passive construction.
This can be used for both standard passive constructions, and for mediopassive constructions (see [`@pass`](guidelines/deep_features/pass.md)).

<conll>
# lang = English
# text = This shall be applauded
1	This	this	PRON	DT	Number=Sing|PronType=Dem	2	subj@pass	_	Entity=(event-70)
2	shall	shall	AUX	MD	VerbForm=Fin	0	root	_	_
3	be	be	AUX	VB	VerbForm=Inf	2	comp:aux	_	_
4	applauded	applaud	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	comp:aux@pass	_	_
</conll>

<conll>
# lang = French
# text = Il fut bâti en 1998.
# text_en = It was build in 1998.
1	Il	il	PRON	_	_	2	subj@pass	_	Gloss=It
2	fut	être	AUX	_	_	0	root	_	Gloss=was
3	bâti	bâtir	VERB	_	_	2	comp:aux@pass	_	Gloss=built
4	en	en	ADP	_	_	2	mod	_	Gloss=in
5	1998	1998	NUM	_	_	4	comp:obj	_	Gloss=1998
</conll>

The `subj@pass` is also used for subject in mediopassive constructions.

<conll>
# Lang = Czech
# text = počet zaměstnanců se snížil
# text_en = the number of employees decreased
1	počet	počet	NOUN	_	_	4	subj@pass	_	Gloss=number
2	zaměstnanců	zaměstnanec	NOUN	_	_	1	mod	_	Gloss=employees.PL.GEN
3	se	se	PRON	_	_	4	comp@pass	_	Gloss=itself
4	snížil	snížit	VERB	_	_	0	root	_	Gloss=decrease
</conll>

<conll>
# lang = French
# text = le livre se vend bien
# text_en = the book is selling well
1	le	le	DET	_	_	2	det	_	Gloss=the
2	livre	livre	NOUN	_	_	4	subj@pass	_	Gloss=book
3	se	se	PRON	_	_	4	comp@pass	_	Gloss=itself
4	vend	vendre	VERB	_	_	0	root	_	Gloss=sell
5	bien	bien	ADV	_	_	4	mod	_	Gloss=well
</conll>

<conll>
# lang = Russian
# text = книга хорошо продаётся
# text_en = the book is selling well
1	книга	книга	NOUN	_	_	3	subj@pass	_	Gloss=book
2	хорошо	хорошо	ADV	_	_	3	mod	_	Gloss=well
3	продаётся	продаваться	VERB	_	_	0	root	_	Gloss=is selling
</conll>



