---
title:  conj:zoom
request: pattern { X -[conj:zoom]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags: 
 - deprel
---

The deprel `conj:zoom` is used for dependency relation in which the second element is describing the referent more in details.

<conllu>
# user_id = lg565
# timestamp = 1775139976368
# sent_id = vacances-sud_4
# text = PNT [PASSÉ-PROCHE] [DIMANCHE]-[AVANT] [FAMILLE] [RÉUNIR] [MANGER] [BAVARDER] [ÉCHANGER]
# source_file = ./recit-agnieska.mp4
# traduction_fr = Dimanche dernier, toute la famille s’est réunie pour prendre un bon repas, bavarder et échanger.
# text_en = Last sunday, all the family gathers to have a good meal, chat and exchange.
1	PNT	_	PRON	_	_	5	discourse	_	AlignBegin=31435|AlignEnd=31917|Gloss=PNT|Tgt=PSSN|wordform=[pnt]
2	[PASSÉ-PROCHE]	_	ADV	_	_	5	mod	_	AlignBegin=31954|AlignEnd=32634|Gloss=[RECENT-PAST]
3	[DIMANCHE]-[AVANT]	_	ADV	_	_	2	conj:zoom	_	AlignBegin=32634|AlignEnd=33472|Gloss=[SUNDAY]-[BEFORE]
4	[FAMILLE]	_	NOUN	_	_	5	subj	_	AlignBegin=33532|AlignEnd=34282|Gloss=[FAMILY]
5	[RÉUNIR]	_	VERB	_	_	0	root	_	AlignBegin=34338|AlignEnd=35745|Gloss=[GATHER]
6	[MANGER]	_	VERB	_	_	5	conj:coord	_	AlignBegin=35787|AlignEnd=37657|Exp[ctxt]=Intensité|Gloss=[EAT]
7	[BAVARDER]	_	VERB	_	_	6	conj:coord	_	AlignBegin=37681|AlignEnd=38449|Gloss=[CHAT]
8	[ÉCHANGER]	_	VERB	_	_	7	conj:coord	_	AlignBegin=38468|AlignEnd=39542|Gloss=[EXCHANGE]
</conllu>
