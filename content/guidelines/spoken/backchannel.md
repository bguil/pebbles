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
  - dependency_based
---

Backchannels are short productions uttered by one participant while another speaker holds the floor.

To be recognized as backchannels, such utterances (i) must be addressed to the content of the other speaker’s contribution; (ii) must not be required or expected by the preceding turn (e.g. answers to wh- and polar questions are expected and required, so they cannot be considered backchannels); (iii) must not require a reaction from the main speaker.

The backchannel feature is encoded as such: `Backchannel:⟨sent_id⟩::⟨tok_id⟩`, on the root of the sentence where the backchannel occurs. The `sent_id` is that of one of the previous sentences. Most often it is the previous sentence, but because of how speech is segmented, it can be the `sent_id` of a sentence further back. The `tok_id` is generally that of the previous sentence's root. In some edge cases, when the previous sentence is rather long and there are multiple utterances that can be annotated as backchannels, we differentiate the `tok_id` of each annotation, using the `tok_id` of the head of the last completed segment.

## Base case

<conll>
# lang = French
# sent_id = Rhap_D0009-205
# speaker = L1
# text = mais, bon, chacun va, va où il veut.
# text_en = but, well, everyone goes, goes where they want.
1	mais	mais	CCONJ	_	_	6	cc	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	bon	bon	INTJ	_	_	6	discourse	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	chacun	chacun	PRON	_	Gender=Masc|PronType=Ind|Shared=Yes	6	subj	_	Number[lex]=Sing|Person[lex]=3
6	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	highlight=red
7	,	,	PUNCT	_	_	8	punct	_	_
8	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj:dicto	_	_
9	où	où	ADV	_	PronType=Rel	8	comp:obl	_	_
10	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	11	subj	_	Person[lex]=3
11	veut	vouloir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	9	mod@relcl	_	Person[ctxt]=3|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_
</conll>

<conll>
# lang = French
# sent_id = Rhap_D0009-206
# speaker = L2
# text = mh, mh.
# text_en = um, um.
1	mh	mh	INTJ	_	_	0	root	_	Backchannel=Rhap_D0009-205::6|SpaceAfter=No|highlight=red
2	,	,	PUNCT	_	_	3	punct	_	_
3	mh	mh	INTJ	_	_	1	conj:dicto	_	_
4	.	.	PUNCT	_	_	1	punct	_	_
</conll>

## Edge case 1

Here is a long sentence with two backchannels, each with a different `tok_id`.

<conll>
# sent_id = Rhap_D0002-42
# speaker = L1
# text = hein, je veux dire, ça, c'est un, c'est une des, des, c'est une des mesures du plan banlieue le busing.
# text_en = now, I mean, that, that it's, that it's one of, of, it's one of the measures of the suburbian plan bus transportation.
1	hein	hein	INTJ	_	_	10	discourse	_	AlignBegin=129020|AlignEnd=129240|Overlap=Rhap_D0002-43|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=129637|AlignEnd=129020|Overlap=Rhap_D0002-37bis
3	je	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	4	subj	_	AlignBegin=129240|AlignEnd=129390|Number[lex]=Sing|Overlap=Rhap_D0002-43|Person[lex]=1
4	veux	vouloir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	10	discourse	_	AlignBegin=129390|AlignEnd=129450|Overlap=Rhap_D0002-43|Person[ctxt]=1|highlight=red
5	dire	dire	VERB	_	VerbForm=Inf	4	comp:obj	_	AlignBegin=129020|AlignEnd=129637|Overlap=Rhap_D0002-43|SpaceAfter=No|Subject=SubjRaising
6	,	,	PUNCT	_	_	4	punct	_	AlignBegin=129637|AlignEnd=129637|Overlap=Rhap_D0002-37bis
7	ça	ça	PRON	_	PronType=Dem	10	dislocated:subj	_	AlignBegin=129637|AlignEnd=129772|Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	AlignBegin=129772|AlignEnd=129772
9	c'	ce	PRON	_	PronType=Dem	10	subj	_	AlignBegin=129772|AlignEnd=129912|Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=129912|AlignEnd=130112|highlight=red
11	un	un	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	10	comp:pred	_	AlignBegin=130112|AlignEnd=130182|Person[lex]=3|SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	AlignBegin=130182|AlignEnd=130182
13	c'	ce	PRON	_	PronType=Dem	14	subj	_	AlignBegin=130182|AlignEnd=130302|Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
14	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	conj:dicto	_	AlignBegin=130302|AlignEnd=130412
15	une	un	PRON	_	Gender=Fem|Number=Sing|PronType=Ind	14	comp:pred	_	AlignBegin=130412|AlignEnd=130508|Person[lex]=3
16-17	des	_	_	_	_	_	_	_	SpaceAfter=No
16	de	de	ADP	_	_	15	comp:obl	_	AlignBegin=130508|AlignEnd=131042
17	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	16	comp:obj@scrap	_	AlignBegin=130508|AlignEnd=131042
18	,	,	PUNCT	_	_	19	punct	_	AlignBegin=131042|AlignEnd=131210
19-20	des	_	_	_	_	_	_	_	SpaceAfter=No
19	de	de	ADP	_	_	16	conj:dicto	_	AlignBegin=131210|AlignEnd=132165
20	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	comp:obj@scrap	_	AlignBegin=131210|AlignEnd=132165
21	,	,	PUNCT	_	_	23	punct	_	AlignBegin=132165|AlignEnd=132944
22	c'	ce	PRON	_	PronType=Dem	23	subj	_	AlignBegin=132944|AlignEnd=132999|Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
23	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	conj:dicto	_	AlignBegin=132999|AlignEnd=133159
24	une	un	PRON	_	Gender=Fem|Number=Sing|PronType=Ind	23	comp:pred	_	AlignBegin=133159|AlignEnd=133479|Person[lex]=3
25-26	des	_	_	_	_	_	_	_	_
25	de	de	ADP	_	_	24	comp:obl	_	AlignBegin=133479|AlignEnd=133739
26	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	27	det	_	AlignBegin=133479|AlignEnd=133739
27	mesures	mesure	NOUN	_	_	25	comp:obj	_	AlignBegin=133739|AlignEnd=134149|Gender[lex]=Fem|Number[ctxt]=Plur
28-29	du	_	_	_	_	_	_	_	_
28	de	de	ADP	_	_	27	udep	_	AlignBegin=134149|AlignEnd=134249
29	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	AlignBegin=134149|AlignEnd=134249
30	plan	plan	NOUN	_	_	28	comp:obj	_	AlignBegin=134249|AlignEnd=134469|Gender[lex]=Masc|Number[ctxt]=Sing
31	banlieue	banlieue	NOUN	_	_	30	mod	_	AlignBegin=134469|AlignEnd=134823|Gender[lex]=Fem|Number[ctxt]=Sing
32	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	AlignBegin=134823|AlignEnd=134938|HasSpokenGender=OnlySingExceptWithLiaison|Overlap=Rhap_D0002-42
33	busing	busing	NOUN	_	_	23	dislocated:subj	_	AlignBegin=134938|AlignEnd=135379|Gender[lex]=Masc|Number[ctxt]=Sing|Overlap=Rhap_D0002-44|SpaceAfter=No
34	.	.	PUNCT	_	_	10	punct	_	AlignBegin=135379|AlignEnd=135379|Overlap=Rhap_D0002-37ter
</conll>

<conll>
# sent_id = Rhap_D0002-43
# speaker = L2
# text = mh, mh.
# text_en = um, um.
1	mh	mh	INTJ	_	_	0	root	_	AlignBegin=134823|AlignEnd=135379|Backchannel=Rhap_D0002-42::4|Overlap=Rhap_D0002-42|SpaceAfter=No|highlight=red
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=135379|AlignEnd=134823|Overlap=Rhap_D0002-37
3	mh	mh	INTJ	_	_	1	discourse	_	AlignBegin=134823|AlignEnd=135379|Overlap=Rhap_D0002-42|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	AlignBegin=135379|AlignEnd=135379|Overlap=Rhap_D0002-37
</conll>

<conll>
# sent_id = Rhap_D0002-44
# speaker = L2
# text = mh, mh.
# text_en = um, um.
1	mh	mh	INTJ	_	_	0	root	_	AlignBegin=0|AlignEnd=0|Backchannel=Rhap_D0002-42::10|Overlap=Rhap_D0002-42|SpaceAfter=No|highlight=red
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=0|AlignEnd=0|Overlap=Rhap_D0002-37
3	mh	mh	INTJ	_	_	1	discourse	_	AlignBegin=0|AlignEnd=0|Overlap=Rhap_D0002-42|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	AlignBegin=0|AlignEnd=0|Overlap=Rhap_D0002-37
</conll>

## Dependency based

This annotation is used in the [dependency based view](./dependency_based), merging backchannels with their corresponding head sentences.

> [!note]
> This kind of annotation is only available in specific dependency based corpora like [SUD_FRANCH-Rhapsodie@db](https://universal.grew.fr/?corpus=SUD_French-Rhapsodie@db).

Example 3: Dependency based view

<conll>
# sent_id = Rhap_D2007-101__Rhap_D2007-102
# old_id = Rhap_D2007-80__Rhap_D2007-80bis
# speaker = L4__L1
# speaker_id = §LM24__§LM22
# text = mais je savais pas.__oui.
# text_en = but I didn't know.__yes.
1	mais	mais	CCONJ	_	_	3	cc	_	AlignBegin=146974|AlignEnd=147209|speaker_id=§LM24
2	je	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	3	subj	_	AlignBegin=147209|AlignEnd=147309|Number[lex]=Sing|Person[lex]=1|speaker_id=§LM24
3	savais	savoir	VERB	_	Mood=Ind|Number=Sing|Tense=Imp|VerbForm=Fin	0	root	_	AlignBegin=147309|AlignEnd=147599|Person[ctxt]=1|speaker_id=§LM24|highlight=red
4	pas	pas	ADV	_	Polarity=Neg	3	mod	_	AlignBegin=147599|AlignEnd=147819|SpaceAfter=No|speaker_id=§LM24
5	.	.	PUNCT	_	_	3	punct	_	AlignBegin=147819|AlignEnd=147819|speaker_id=§LM24
6	oui	oui	INTJ	_	_	3	discourse:backchannel/attach	_	AlignBegin=148094|AlignEnd=148429|Backchannel=Yes|SpaceAfter=No|speaker_id=§LM22|highlight=red
7	.	.	PUNCT	_	_	6	punct	_	AlignBegin=148429|AlignEnd=148429|speaker_id=§LM22
</conll>
