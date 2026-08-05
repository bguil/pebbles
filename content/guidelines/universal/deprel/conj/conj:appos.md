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

This relation `conj:appos` is used for appositions. In an apposition, conjuncts have the same referent, but two clearly different denotations. The conjunct in apposition forms a predication in the background (in *Mary, my best friend*, the second conjunct *my best friend* is a predication on the first conjunct *Mary*, it is equivalent to *Mary is my best friend*).

> [!note]
> `conj:appos` is only used when the two conjuncts form two separate phrases. When the apposition is a modification, the relation `mod:appos` must be used, like *my friend Mary* or *le boulevard Saint-Michel*.

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

<conll>
# lang = Naija
# sent_id = WAZK_07_As-E-Dey-Hot-News-Read_MG__19
# sound_url = https://naijasyncor.huma-num.fr/carte/mp3/WAZK_07_As-e-dey-Hot-News-Read_MG.mp3
# speaker_age = 16-30
# speaker_birthplace = Bayelsa
# speaker_education = Tertiary
# speaker_id = Sp291
# speaker_naija_competency = Excellent
# speaker_primary_other_language = English
# speaker_residence = Kano
# speaker_sex = F
# text = # for jolijoli < # { we Naija rapper |a Eva Allordiah } //
# text_en = In entertainment news, our Nigerian rapper, Eva Alordiah...
# text_ortho = For jolijoli, we Naija rapper, Eva Allordiah.
1	#	#	PUNCT	_	_	9	punct	_	AlignBegin=167560|AlignEnd=168740|Gloss=PUNCT
2	for	for	ADP	_	_	9	mod:periph	_	AlignBegin=168740|AlignEnd=168990|Gloss=for
3	jolijoli	jolijoli	NOUN	_	_	2	comp:obj	_	AlignBegin=168990|AlignEnd=169672|Gloss=enjoyment
4	<	<	PUNCT	_	_	2	punct	_	AlignBegin=169672|AlignEnd=169672|Gloss=PUNCT
5	#	#	PUNCT	_	_	2	punct	_	AlignBegin=169672|AlignEnd=169837|Gloss=PUNCT
6	{	{	PUNCT	_	_	9	punct	_	AlignBegin=169672|AlignEnd=169837|Gloss=PUNCT
7	we	we	PRON	_	Number=Plur|Person=1|Poss=Yes	9	mod:poss	_	AlignBegin=169837|AlignEnd=170010|Gloss=PL.1.POSS
8	Naija	Naija	PROPN	_	_	9	mod	_	AlignBegin=170010|AlignEnd=170438|Gloss=Naija
9	rapper	rapper	NOUN	_	_	0	root	_	AlignBegin=170438|AlignEnd=170900|Gloss=rapper|highlight=red
10	|a	|a	PUNCT	_	_	11	punct	_	AlignBegin=170900|AlignEnd=171290|Gloss=PUNCT
11	Eva	Eva	PROPN	_	_	9	conj:appos	_	AlignBegin=170900|AlignEnd=171290|Gloss=Eva|highlight=red
12	Allordiah	Allordiah	PROPN	_	_	11	flat	_	AlignBegin=171290|AlignEnd=171800|Gloss=Allordiah
13	}	}	PUNCT	_	_	9	punct	_	AlignBegin=171800|AlignEnd=171800|Gloss=PUNCT
14	//	//	PUNCT	_	_	9	punct	_	AlignBegin=171770|AlignEnd=171800|Gloss=PUNCT
</conll>

> [!tips]
> Related discussion: [#59](https://github.com/surfacesyntacticud/guidelines/issues/59)
