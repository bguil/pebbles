---
title: conj:chaining
request: pattern { X -[conj:chaining]-> Y }
scope: 
  schema: SUD
  lang: fsl
type: doc
tags:
  - deprel
---

The deprel `conj:chaining` is used for dependency relation in chains: the different elements in the chain exhibit the same person or situation transfert. 

<conll>
# user_id = lg565
# timestamp = 1773918184337
# sent_id = LSColin-CD-cheval__7
# text = [tomber] [AVOIR-MAL] [gésir-sol]
# text_fr = [Il] tombe. Il a mal, à la jambe.
# text_en = It falls. Its legs is hurt.
1	[tomber]	_	VERB	_	_	0	root	_	PrbReal=deux-pattes+exp|Subj=prb-cheval
2	[AVOIR-MAL]	_	VERB	_	_	1	conj:chaining	_	PrbReal=deux-pattes+exp|Subj=prb-cheval
3	[gésir-sol]	_	VERB	_	_	2	conj:chaining	_	PrbReal=deux-pattes+exp|Subj=prb-cheval
</conll>

In this example, along the three verbs, the subject is a realized throught a role shift. It is annotated thanks to the feature `PrbReal`, describing how the role shift (body proform) is realized.
