---
title: subj main rel
type: doc
tags: 
 - deprel
---

In SUD, the `subj` relation is used for all subjects (either nominal which are `nsubj` in UD or clausal which are `csubj` in UD).

> [!hint]
> [Table of all SUD deprel with `subj` as main rel](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^subj(@.*|:.*)?$)

Most of the times, [`subj`](./subj.md) is used without extension.
Possible extensions are:
 - `subj@expl`
 - `subj@caus`
 - `subj@pass`

Other extensions appear during conversion from UD => SUD, UD subrelation are kept as "deep" SUD relation for information preserving. For instance UD:`nsubj:cop` => SUD:`subj@cop`.
