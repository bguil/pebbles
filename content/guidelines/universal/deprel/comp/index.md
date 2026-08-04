---
title: comp main rel
request: pattern { X -[1=comp]-> Y }
type: doc
scope:
  schema: SUD
tags:
 - deprel
---

In SUD, the `comp` relation is used for many sort of complement.

> [!hint]
> [Table of all SUD deprel with `comp` as main rel](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^comp(@.*|:.*)?$)

The `comp` is used without extension: see [`comp`](./comp.md):
 - for complements of `ADP` or `SCONJ`
 - for a few other complements

But, `comp` is also largely used specific sub relations:
 - [`comp:aux`](./comp:aux.md)
 - [`comp:cleft`](./comp:cleft.md)
 - [`comp:obj`](./comp:obj.md)
 - [`comp:obl`](./comp:obl.md)
 - [`comp:pred`](./comp:pred.md)

> [!warning]
> Until 2026, the complement of `ADP` and `SCONJ` were annotated with the relation `comp:obj`.
> In version 2.18, it is still the case and it will change in version 2.19 (November 2026)
> See the difference on Sequoia for instance (version 2.18 and latest): [Grew-match](https://universal.grew.fr/?custom=6a71def028c58)
