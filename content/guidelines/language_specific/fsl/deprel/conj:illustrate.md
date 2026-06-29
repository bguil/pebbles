---
title: conj:illustrate
request: pattern { X -[conj:illustrate]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - deprel
---

The deprel `conj:illustrate` is used for dependency relation the two elements refer to the same semantic entity and one uses a more iconic process than the other, or one that can be localized in space. It contributes to the visual representation of the discourse.

<conll>
# sent_id = vacances-sud_15
# text = [PERSONNE] [PEU] [prm:personne]
# source_file = ./recit-agnieska.mp4
# text_fr = (et surtout) très peu de monde.
# text_en = (and especially) very little people.
1	[PERSONNE]	_	NOUN	_	_	2	subj	_	AlignBegin=105470|AlignEnd=105978|Gloss=[PERSON]
2	[PEU]	_	ADV	_	ExtPos=VERB	0	root	_	AlignBegin=105991|AlignEnd=106787|Exp[lex]=Intensité|Gloss=[LITTLE]
3	[prm:personne]	_	NOUN	_	_	2	conj:illustrate	_	AlignBegin=106791|AlignEnd=108683|Exp[ctxt]=Intensité|Gloss=[prm:person]|Rep=4|TransfertType=Situation|TwoH=Yes
</conll>
