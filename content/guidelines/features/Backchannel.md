---
title: Backchannel
request: pattern { X [Backchannel] }
scope:
  schema: SUD
type: doc
tags:
  - feature
  - spoken
  - misc
---

Backchannels are short productions uttered by one participant while another speaker holds the floor.

To be recognized as backchannels, such utterances (i) must be addressed to the content of the other speaker’s contribution; (ii) must not be required or expected by the preceding turn (e.g. answers to wh- and polar questions are expected and required, so they cannot be considered backchannels); (iii) must not require a reaction from the main speaker.

The backchannel feature is encoded as such: `Backchannel: ⟨sent_id⟩::⟨tok_id⟩`, on the root of the sentence where the backchannel occurs.

<conll>
# sent_id = Rhap_D0009-205
# speaker = L1
# text = mais, bon, chacun va, va où il veut.
1	mais	mais	CCONJ	_	_	6	cc	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	bon	bon	INTJ	_	_	6	discourse	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	chacun	chacun	PRON	_	Gender=Masc|PronType=Ind|Shared=Yes	6	subj	_	Number[lex]=Sing|Person[lex]=3
6	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	,	,	PUNCT	_	_	8	punct	_	_
8	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj:dicto	_	_
9	où	où	ADV	_	PronType=Rel	8	comp:obl	_	_
10	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	11	subj	_	Person[lex]=3
11	veut	vouloir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	9	mod@relcl	_	Person[ctxt]=3|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_
</conll>

<conll>
# sent_id = Rhap_D0009-206
# speaker = L2
# text = mh, mh.
1	mh	mh	INTJ	_	_	0	root	_	Backchannel=Rhap_D0009-205::11|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	mh	mh	INTJ	_	_	1	conj:dicto	_	_
4	.	.	PUNCT	_	_	1	punct	_	_
</conll>
