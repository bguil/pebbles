---
title: upos values
request: |-
  pattern { N [upos <> ADJ|ADP|ADV|AUX|CCONJ|DET|INTJ|NOUN|NUM|PART|PRON|PROPN|PUNCT|SCONJ|SYM|VERB|X | IDEO] }
scope:
  schema: ["pSUD", "mSUD"]
  lang: ["fr", "ha"]
level: error
type: valid
---

In (m)SUD, the upos tagset is the same as the in UD (see [UD guidelines](https://universaldependencies.org/u/pos/index.html)).
The only exception is for the `upos=IDEO` which is used in a few treebanks for ideophones.
