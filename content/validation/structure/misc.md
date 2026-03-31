---
title: format of the MISC column
request: pattern { N [__RAW_MISC__] }
scope:
  schema: SUD
level: warning
type: valid
---

Whereas it is not required by [CoNNL-U specification](https://universaldependencies.org/format.html), the `MISC` column should contains a feature structure formated like the `FEATS` column.

If the `MISC` column does not meet this requirement **Grew** keep the column content in a special feature `__RAW_MISC__` (see [Grew doc](https://grew.fr/doc/conllu/#how-the-misc-field-is-handled-by-grew)).