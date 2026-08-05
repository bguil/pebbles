---
title: SUD deprels
type: general
tags:
 - deprel
---

# SUD dependency relations

## Structure of dependency relations

In SUD, each dependency relation is made of up to three parts:
 - a required **main** relation 
 - an optional **subrelation** (prefixed by `:`)
 - an optional **deep_feature** (prefixed by `@`)

Some examples of the four possible cases:
 - Only **main** relation: [cc](./cc)
 - with a **subrelation** only: [comp:obj](guidelines/universal/deprel/comp/comp:obj)
 - with a **deep feature** only: [subj@expl](guidelines/universal/deprel/subj/subj@expl)
 - with both: [comp:aux@tense](guidelines/universal/deprel/comp/comp:aux)

> [!note]- about mSUD
> In mSUD, there is a fourth part called `type` and prefixed by `/`

## SUD specific main relations
In SUD there are three specific (i.e. not used in UD) main relation:
[`subj`](guidelines/universal/deprel/subj),
[`comp`](guidelines/universal/deprel/comp) and 
[`mod`](guidelines/universal/deprel/mod).

The schema below shows these relations and their standard extensions (possible combination of subrelations and deep features.

![SUD deprel taxonomie](/static/images/drawio/SUD_deprel_taxo.png)

The schema also introduce two underspecified relation specificaly used in SUD:
 - [`udep`](guidelines/universal/deprel/udep) with stands for a relation which is either a `comp` or a `mod`. It is typically used for noun complements for which distinction is not done in most of the cases. See for example in [SUD_French-GSD](https://universal.grew.fr/?custom=6a73172592f8f).
 - `unk` with stands for a relation which is unkonwn: no specific dependency could be identified. It is mainly used in annotation of [idioms](guidelines/universal/construction/idioms_titles).


## Other common relations and extensions

Here is a list of commonly used main relations in SUD, with their common extensions.

 - [`cc`](guidelines/universal/deprel/cc)
 - [`compound`](guidelines/universal/deprel/compound)
 - [`conj`](guidelines/universal/deprel/conj)
   - [`conj:appos`](guidelines/universal/deprel/conj/conj:appos)
   - [`conj:coord`](guidelines/universal/deprel/conj/conj:coord)
   - [`conj:dicto`](guidelines/universal/deprel/conj/conj:dicto)
   - `conj:reform`
 - `det`
 - [`discourse`](guidelines/universal/deprel/discourse)
 - [`dislocated`](guidelines/universal/deprel/dislocated)
   - `dislocated:mod`
   - `dislocated:obj`
   - `dislocated:obl`
   - `dislocated:subj`
   - `dislocated:unk`
 - [`flat`](guidelines/universal/deprel/flat)
   - `flat@foreign`
   - `flat@name`
 - `goeswith`
 - `orphan`
 - `parataxis`
   - `parataxis:insert`
   - `parataxis:parenth`
 - `punct`
 - `repair`
 - `root`
 - [`vocative`](guidelines/universal/deprel/flat)

> [!note]
> In treebanks converted from UD to SUD, other deep extensions may appear.
> See examples in [English treebanks](https://universal.grew.fr/?custom=6a3cf64743620): `@desc`, `@npmod`, `@poss`, `@tmod`and `@unmarked` are used to keep track of UD subrelations.

 