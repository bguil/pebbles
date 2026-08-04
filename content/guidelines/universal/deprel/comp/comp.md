---
title: comp
request: pattern { X -[comp]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Complement relation without subrel

> [!warning]
> Until 2026, the complement of `ADP` and `SCONJ` were annotated with the relation `comp:obj`.
> In version 2.18, it is still the case and it will change in version 2.19 (November 2026)
> See the difference on Sequoia for instance (version 2.18 and latest): [Grew-match](https://universal.grew.fr/?custom=6a71def028c58)

## Main usage
The `comp` relation is mainly used to introduce the complement of `ADP` and `SCONJ` (and also more rarely of `PART` of `CCONJ`).

<conll>
# lang = French
# sent_id = annodis.er_00150
# text = Une pluie d'étoiles
# text_en = A shower of stars (lit: a rain of stars)
1	Une	un	DET	_	_	2	det	_	Gloss=a
2	pluie	pluie	NOUN	_	_	0	root	_	Gloss=rain
3	d'	de	ADP	_	_	2	udep	_	Gloss=of|SpaceAfter=No|highlight=red
4	étoiles	étoile	NOUN	_	_	3	comp	_	Gloss=stars|highlight=red
</conll>

<conll>
# lang = French
# sent_id = ParisStories_2019_experienceFac_83
# text = je trouve que c'est agréable.
# text_en = I think that it's nice.
1	je	moi	PRON	_	_	2	subj	_	Gloss=I
2	trouve	trouver	VERB	_	_	0	root	_	Gloss=think
3	que	que	SCONJ	_	_	2	comp:obj	_	Gloss=that|highlight=red
4	c'	ce	PRON	_	_	5	subj	_	SpaceAfter=No|Gloss=it
5	est	être	AUX	_	_	3	comp	_	Gloss=be|highlight=red
6	agréable	agréable	ADJ	_	_	5	comp:pred	_	SpaceAfter=No|Gloss=nice
</conll>


## Other uasge
The `comp` relation (without subrel) is used when one has difficulty deciding between `comp:obj` and `comp:obl`.

In **French**, the `comp` label is frequently used to annotate reflexive pronouns and other pronominal clitics which contribute to the formation of pronominal verbs when it is difficult to determine the role of the pronoun.
In constructions such as *Il s'en sort* (en: *He's doing well*) the pronoun *se* no longer provides the semantic value of an argument of the verb.
However, it fits so well into the typical argument structure that it is hard to recognize that it cannot be de-pronominalized.
For this reason, it is annotated with the `comp` relation.

<conll>
# lang = French
# text = Il s'en sort bien
# text_en = He's doing well
1	Il	il	PRON	_	_	4	subj	_	Gloss=he
2	s'	se	PRON	_	_	4	comp	_	Gloss=himself
3	en	en	PRON	_	_	4	comp	_	Gloss=of|highlight=red
4	sort	sortir	VERB	_	_	0	root	_	Gloss=go_out|highlight=red
5	bien	bien	ADV	_	_	4	mod	_	Gloss=well
</conll>

<conll>
# lang = French
# text = Il se souvient
# text_en = He remembers
1	Il	il	PRON	_	_	3	subj	_	Gloss=he
2	se	se	PRON	_	_	3	comp	_	Gloss=himself|highlight=red
3	souvient	souvenir	VERB	_	_	0	root	_	Gloss=remembers|highlight=red
</conll>

<conll>
# lang = French
# text = Christine en veut à son amie
# text_en = Christine is angry at her friend
1	Christine	Christine	PROPN	_	_	3	subj	_	Gloss=Christine
2	en	en	PRON	_	_	3	comp	_	Gloss=of|highlight=red
3	veut	vouloir	VERB	_	_	0	root	_	Gloss=want|highlight=red
4	à	à	ADP	_	_	3	comp:obl	_	Gloss=to
5	son	son	DET	_	_	6	det	_	Gloss=her
6	amie	ami	NOUN	_	_	4	comp:obj	_	Gloss=friend
</conll>

## Deep syntactic features

### `@pass`

In the case of **passive reflexive constructions**, the reflexive pronoun is attached with `comp` and the deep syntactic feature [`@pass`](guidelines/universal/deprel/deep_features/pass).

<conll>
# lang = French
# text = Il se situe à environ 13 kilomètres au nord-ouest
# text_en = It is situated about 13 kilometers to the north-west
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	subj@pass	_	Gloss=it
2	se	se	PRON	_	Person=3|PronType=Prs	3	comp@pass	_	Gloss=is|highlight=red
3	situe	situer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=situated|highlight=red
4	à	à	ADP	_	_	3	comp:obl	_	Gloss=at
5	environ	environ	ADV	_	_	6	mod	_	Gloss=about
6	13	13	NUM	_	_	7	det	_	Gloss=13
7	kilomètres	kilomètre	NOUN	_	Gender=Masc|Number=Plur	4	comp:obj	_	Gloss=kilometers
8-9	au	_	_	_	_	_	_	_	_
8	à	à	ADP	_	_	7	udep	_	Gloss=to
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Art	10	det	_	Gloss=the
10	nord-ouest	nord-ouest	NOUN	_	Gender=Masc|Number=Sing	8	comp:obj	_	Gloss=north-west
</conll>

### `@expl`

We can also have the deep syntactic feature [`@expl`](guidelines/universal/deprel/deep_features/expl) for the label `comp`. 

<conll>
# lang = French
# text = euh, il y a un stade aussi à côté.
1	euh	euh	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	subj@expl	_	_
4	y	y	PRON	_	Person=3|PronType=Prs	5	comp@expl	_	highlight=red
5	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	highlight=red
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	stade	stade	NOUN	_	Gender=Masc|Number=Sing	5	comp:obj	_	_
8	aussi	aussi	ADV	_	_	5	mod	_	_
9	à	à	ADP	_	_	5	mod	_	_
10	côté	côté	NOUN	_	Gender=Masc|Number=Sing	9	comp:obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_
</conll>


More information can be found on the French [pronomional verb](@@@../../../language/French/syntax/french_pronominal_verb.md) page or on the page about the annotation of the idiom [*il y a*](@@@../../../language/French/syntax/il_y_a.md).


