---
title: conj
request: pattern { X -[1=conj]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - coordinating-conjunction
 - deprel
---

The `conj` relation in SUD corresponds to the three UD relations:
[`reparandum`](https://universaldependencies.org/u/dep/reparandum.html),
[`conj`](https://universaldependencies.org/u/dep/conj.html) and
[`appos`](https://universaldependencies.org/u/dep/appos.html).

These three relations work as paradigmatic lists. That's why in SUD, we decided to gather these three relations under the main relation `conj` to underline the similarity between the three.

In **SUD**, the basic `conj` relation is used with three different subtypes:
 - [`conj:dicto`](conj:dicto) for disfluencies when the speaker corrects his speech (parallel to `reparandum` in UD)
 - [`conj:coord`](conj:coord) for elements connected by a coordinating conjunction (parallel to `conj` in UD)
 - [`conj:appos`](conj:appos) for appositional modifiers that serve to define better the previous noun (parallel to `appos` in UD)

In the three cases, the relation relates the first conjunct to the second one, the conjunction itself [`upos=CCONJ`](guidelines/universal/upos/CCONJ) is attached to the second conjunct with the relation [`cc`](cc).

> [!tips]
> See also a global view of `conj` usage in the last SUD release in this [table](https://tables.grew.fr/?data=sud_deps/conj).