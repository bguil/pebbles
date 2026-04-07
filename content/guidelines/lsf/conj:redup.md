---
title:  conj:redup
request: pattern { X -[conj:redup]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags: 
 - deprel
---

The deprel `conj:redup` is used for dependency relation between two identical elements, realized without disfluency.

<conllu>
# user_id = lg565
# timestamp = 1775556623383
# sent_id = trajet-len-1-signerA_4
# text = [OUI] [À-CÔTÉ] [LA?] [DESCENDRE] [BUS] [NUMÉRO] [VINGT] [SEPT] [BUS]
# source_file = ./Trajet_LEN_1.mp4
# traduction_fr = Oui, à côté, là. Je descends du métro et je prends le bus numéro 27, le bus.
# text_en = Yes, next by, here. I get out of the metro and I take the bus number 27.
1	[OUI]	_	INTJ	_	_	4	discourse	_	AlignBegin=35598|AlignEnd=36110|Gloss=[YES]
2	[À-CÔTÉ]	_	ADV	_	_	4	mod	_	AlignBegin=36157|AlignEnd=36717|Gloss=[NEXT-TO]
3	[LA?]	_	_	_	_	_	_	_	AlignBegin=36748|AlignEnd=36969
4	[DESCENDRE]	_	VERB	_	_	0	root	_	AlignBegin=36984|AlignEnd=38000|Gloss=[GET-OUT]
5	[BUS]	_	NOUN	_	ExtPos=VERB	4	conj:coord	_	AlignBegin=38425|AlignEnd=38976|Gloss=[BUS]
6	[NUMÉRO]	_	NOUN	_	_	5	mod	_	AlignBegin=39008|AlignEnd=39622|Gloss=[NUMBER]
7	[VINGT]	_	NUM	_	_	6	comp:obj	_	AlignBegin=39646|AlignEnd=39882|Gloss=[TWENTY]
8	[SEPT]	_	NUM	_	_	7	flat:num	_	AlignBegin=39898|AlignEnd=40323|Gloss=[SEVEN]
9	[BUS]	_	NOUN	_	_	5	conj:redup	_	AlignBegin=40339|AlignEnd=40961|Gloss=[BUS]
</conllu>
