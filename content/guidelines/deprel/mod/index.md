---
title: mod main rel
type: doc
tags:
 - deprel
---

In SUD, the `mod` relation is used for all modifiers (as opposed to UD set of label `amod`, `advmod`…).

> [!hint]
> [Table of all SUD deprel with `mod` as main rel](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^mod(@.*|:.*)?$)

Most of the times, [`mod`](./mod.md) is used without extension.
Frequent extensions are:
 - `mod@relcl`

Other extensions appear during conversion from UD => SUD, UD subrelation are kept as "deep" SUD relation for information preserving.
For instance, UD:`nmod:tmod` => SUD:`mod@tmod`.
