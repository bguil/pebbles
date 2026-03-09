---
title: Single root
request: |
  pattern {
    ANCHOR [form="__0__"];
    ANCHOR -[1=root]-> X1;
    ANCHOR -[1=root]-> X2;
  }
scope:
  - schema: SUD
level: error
type: valid
---

Only one node must be attached to the anchor with the `root` deprel.

**Note:** the deprel can be an extention of `root`, for instance with the relation `root@scrap` for unfinished sentences in spoken French:

<Conll>
# sent_id = Rhap_D0001-108
# text = c'était…
1	c'	ce	PRON	_	PronType=Dem	2	subj	_	AlignBegin=235874|AlignEnd=236249|Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root@scrap	_	AlignBegin=235874|AlignEnd=236249|SpaceAfter=No
3	…	…	PUNCT	_	_	2	punct	_	AlignBegin=236249|AlignEnd=236249
</Conll>
