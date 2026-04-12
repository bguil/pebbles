---
title:  conj:reform
request: pattern { X -[conj:reform]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags: 
 - deprel
---

The deprel `conj:reform` is used for dependency relation in which the elements are similar but not identical, the second one is used as a reformulation.

<conll>
# user_id = lg565
# timestamp = 1775036580729
# sent_id = crdo-fsl-cuc022__8
# source_file = ./CUC022_low.mp4
# text_fr = Il heurte la barrière et tombe. Il a mal, à la jambe. L'oiseau, voyant la chute, s'envole chercher
# text = [OISEAU] [s'envoler] [VOLER]
1	[OISEAU]	_	NOUN	_	_	2	subj	_	AlignBegin=51995|AlignEnd=52755|Gloss=[BIRD]
2	[s'envoler]	_	VERB	_	_	0	root	_	AlignBegin=52755|AlignEnd=53555|Gloss=[fly-away]|Prb-real=deux-ailes|Subj=prb:oiseau
3	[VOLER]	_	VERB	_	_	2	conj:reform	_	AlignBegin=53555|AlignEnd=54155|Gloss=[FLY]|Subj=prm:oiseau|Tgt=PSSXr
</conll>
