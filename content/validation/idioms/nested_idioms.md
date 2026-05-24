---
title: Nested idioms
request: |
  pattern { M -> N; M [InIdiom]; N [Idiom]; }
scope:
  schema: SUD
level: error
type: valid
---

An `Idiom` depends of an `InIdiom` (nested idiom are not allowed).