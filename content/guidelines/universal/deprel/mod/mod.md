---
title: mod
request: pattern { X -[mod]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Modifier relation without extension

The `mod` relation is used for modifiers of verbs, nouns, adjectives, adverbs, auxiliaries, adpositions and conjunctions.

<conll>
# lang = English
# text = Great service
1	Great	great	ADJ	JJ	Degree=Pos	2	mod	_	_
2	service	service	NOUN	NN	Number=Sing	0	root	_	_
</conll>

<conll>
# lang = English
1	a	a	DET	_	_	2	det	_	_
2	country	country	NOUN	_	_	0	root	_	_
3	with	with	ADP	_	_	2	mod	_	_
4	so	so	ADV	_	_	5	mod	_	_
5	many	many	ADJ	_	_	8	mod	_	_
6	different	different	ADJ	_	_	8	mod	_	_
7	language	language	NOUN	_	_	8	compound	_	_
8	groups	group	NOUN	_	_	3	comp:obj	_	_
</conll>

<conll>
# lang = French
# sent_id = fr-ud-train_00006
# text = je reviendrais avec plaisir !
# text_en = I'll be back with pleasure!
1	je	moi	PRON	_	_	2	subj	_	Gloss=I
2	reviendrais	revenir	VERB	_	_	0	root	_	highlight=red|Gloss=be_back
3	avec	avec	ADP	_	_	2	mod	_	highlight=red|Gloss=with
4	plaisir	plaisir	NOUN	_	_	3	comp:obj	_	Gloss=pleasure
5	!	!	PUNCT	_	_	2	punct	_	_
</conll>









