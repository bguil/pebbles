---
title: conj:appos
request: pattern { X -[1=conj, 2=appos]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - apposition
 - deprel
---

The deprel `conj:appos` is used for dependency relation in apposition: the two elements refers to the same semantic entity.

<conll>
# lang = French
# text = Nietzsche le philosophe allemand parle de a une définition de l'art
# text_en = Nietzsche the German philosopher speaks of has an art definition
1	Nietzsche	Nietzsche	PROPN	_	_	5	subj	_	Gloss=Niezsche|highlight=red
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	Gloss=the
3	philosophe	philosophe	NOUN	_	Gender=Masc|Number=Sing	1	conj:appos	_	Gloss=philosopher|highlight=red
4	allemand	allemand	ADJ	_	Gender=Masc|Number=Sing	3	mod	_	Gloss=German
5	parle	parler	VERB	_	_	0	root	_	Gloss=talks
6	de	de	ADP	_	_	5	comp:obl@scrap	_	Gloss=about
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj:dicto	_	Gloss=has
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	Gloss=a
9	définition	définition	NOUN	_	Gender=Fem|Number=Sing	7	comp:obj	_	Gloss=definition
10	de	de	ADP	_	_	9	udep	_	Gloss=of
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	Gloss=the
12	art	art	NOUN	_	Gender=Masc|Number=Sing	10	comp:obj	_	Gloss=art
</conll>
