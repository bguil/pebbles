---
title:  Non-Dominant Hand
request: pattern { X [NDH] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags: 
 - feature
---

NDH stands for Non-Dominant Hand. This feature is used when a different semantic entity is realized simultaneously by the non-dominant hand ('main dominée' in the French literature). 

<conll>
# user_id = lg565
# timestamp = 1775234395722
# sent_id = vacances-sud_24
# text = [RENTRER] [EAU] [avancer] [marcher-difficilement] [rochers-dans-les-pieds] [marcher-difficilement] [NAGER] [AGRÉABLE]
# source_file = ./recit-agnieska.mp4
# text_fr = d’ailleurs quand on rentrait dans l’eau ça faisait mal aux pieds, puis une fois dans l’eau, on nageait et ça allait mieux.
# text_en = when we enter in the water it hurts the feet, but once in the water, we swim and it is better.
1	[RENTRER]	_	VERB	_	_	0	root	_	AlignBegin=140278|AlignEnd=140835|Gloss=[ENTER]|NDH=bord
2	[EAU]	_	NOUN	_	_	1	conj:obl	_	AlignBegin=140835|AlignEnd=141157|Gloss=[WATER]|NDHHeld=bord
3	[avancer]	_	VERB	_	_	1	conj:chaining	_	AlignBegin=141174|AlignEnd=142065|Exp[ctxt]=Douleur|Gloss=[go-forward]|NDHHeld=bord
4	[marcher-difficilement]	_	VERB	_	_	3	conj:chaining	_	AlignBegin=142078|AlignEnd=143261|Exp[lex]=Douleur|Gloss=[hardly-walk]|Subj=prm:pieds
5	[rochers-dans-les-pieds]	_	NOUN	_	_	4	conj:illustrate	_	AlignBegin=143270|AlignEnd=144204|Exp[ctxt]=Douleur|Gloss=[rocks-in-feet]|Loc=NDH|NDHHeld=prm:pied|Rep=3|Theme=prm-DH:rocher
6	[marcher-difficilement]	_	VERB	_	_	4	conj:redup	_	AlignBegin=144217|AlignEnd=145080|Exp[lex]=Douleur|Gloss=[hardly-walk]
7	[NAGER]	_	VERB	_	_	6	conj:chaining	_	AlignBegin=145080|AlignEnd=147069|Exp[ctxt]=Positif|Gloss=[SWIM]
8	[AGRÉABLE]	_	ADJ	_	_	7	mod	_	AlignBegin=147069|AlignEnd=148069|Exp[lex]=Positif|Gloss=[PLEASANT]
</conll>
