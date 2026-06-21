---
title: NDHHeld
request: pattern { X -[NDHHeld]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags: 
 - feature
---

# Non-Dominant Hand Held

NDHHeld stands for Non-Dominant Hand Held. It describs the fact of holding the element of the non-dominant hand/the nature of the element held?

<conll>
# user_id = lg565
# timestamp = 1775564604946
# sent_id = vacances-sud_1
# text = [PASSÉ-PROCHE] [VACANCES] [ÉTÉ] [euh] [PARTIR] [OÙ] [FRANCE] [carte-france] [SUD] [région-sud] mains-jointes
# source_file = ./recit-agnieska.mp4
# text_fr = Les dernières vacances d’été, on est partis dans le sud de la France.
# text_en = Last summer holidays, we went to the south of France.
1	[PASSÉ-PROCHE]	_	ADV	_	_	5	mod	_	AlignBegin=2248|AlignEnd=2717|Gloss=[RECENT-PAST]
2	[VACANCES]	_	NOUN	_	ExtPos=ADV	1	conj:zoom	_	AlignBegin=2723|AlignEnd=3166|Gloss=[HOLIDAYS]
3	[ÉTÉ]	_	NOUN	_	_	2	udep	_	AlignBegin=3183|AlignEnd=4330|Gloss=[SUMMER]
4	[euh]	_	INTJ	_	_	1	discourse	_	AlignBegin=4343|AlignEnd=4992|Gloss=[hesitation]
5	[PARTIR]	_	VERB	_	_	0	root	_	AlignBegin=5011|AlignEnd=5706|Gloss=[LEAVE]|Src=Prs1
6	[OÙ]	_	PRON	_	PronType=Int	7	mod	_	AlignBegin=5745|AlignEnd=6867|Exp[lex]=Int|Focus=Yes|Gloss=[WHERE]
7	[FRANCE]	_	PROPN	_	_	5	comp:obl	_	AlignBegin=6884|AlignEnd=7277|Gloss=[FRANCE]
8	[carte-france]	_	PRON	_	_	7	conj:illustrate	_	AlignBegin=7296|AlignEnd=8476|Gloss=[map-france]
9	[SUD]	_	NOUN	_	_	7	udep	_	AlignBegin=8490|AlignEnd=9205|Gloss=[SOUTH]|NDHHeld=prm:carte
10	[région-sud]	_	PRON	_	_	9	conj:illustrate	_	AlignBegin=9235|AlignEnd=10548|Gloss=[south-region]|NDHHeld=prm:carte
11	mains-jointes	_	PUNCT	_	_	5	punct	_	AlignBegin=10574|AlignEnd=11065|Gloss=clasped-hands
</conll>
