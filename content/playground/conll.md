---
title: Conll inclusion
---


It is possible (and recommended) to add examples in guidelines pages.
For this, `conll` code can directly be embedded in the page by adding using the `Conll` tag:

```
<conll>
… conll code …
</conll>
```

## Examples

A SUD annotation example:

<conll>
# lang = English
# text = I'm happy about this.
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	subj	_	SpaceAfter=No
2	'm	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	happy	happy	ADJ	JJ	Degree=Pos	2	comp:pred	_	_
4	about	about	ADP	IN	_	3	mod	_	_
5	SUD	SUD	PROPN	DT	Number=Sing	4	comp:obj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_
</conll>

Note that the metadata `lang` is required in pages that are not specific to only one language.

Colors can be added on tokens with a features `highlight=red` in MISC column:

```
…
3	happy	happy	ADJ	JJ	Degree=Pos	2	comp:pred	_	highlight=red
…
```

<conll>
# lang = English
# text = I'm happy about this.
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	subj	_	SpaceAfter=No
2	'm	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	happy	happy	ADJ	JJ	Degree=Pos	2	comp:pred	_	highlight=red
4	about	about	ADP	IN	_	3	mod	_	_
5	mSUD	mSUD	PROPN	DT	Number=Sing	4	comp:obj	_	highlight=blue|SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_
</conll>

To avoid confusion, we use the tag: `<conll schema="ud">`, which has a different background colour.

UD example:

<conll schema="ud">
# lang = English
# sent_id = email-enronsent19_01-0071
# text = I'm happy about this.
1-2	I'm	_	_	_	_	_	_	_	_
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	'm	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	happy	happy	ADJ	JJ	Degree=Pos	0	root	_	_
4	about	about	ADP	IN	_	5	case	_	_
5	this	this	PRON	DT	Number=Sing|PronType=Dem	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_
</conll>

