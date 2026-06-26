---
title: Lemmatisation for PronType=Prs
request: |
  pattern { X [upos=PRON,PronType=Prs, !Typo] }
  without { X[form=/-?en/i, lemma="en"]}
  without { X[form=/-?y'?/i, lemma="y"]}

  without { X[form=/ils?/i, lemma="lui"]}
  without { X[form=/-ils?/i, lemma="lui"]}
  without { X[form=/-t-ils?/i, lemma="lui"]}
  without { X[form=/elles?/i, lemma="lui"]}
  without { X[form=/-elles?/i, lemma="lui"]}
  without { X[form=/-t-elle?/i, lemma="lui"]}
  without { X[form=/lui/i, lemma="lui"]}
  without { X[form=/l[ae']/i, lemma="lui"]}
  without { X[form=/les/i, lemma="lui"]}
  without { X[form=/leur/i, lemma="lui"]}
  without { X[form=/eux/i, lemma="lui"]}

  without { X[form=/s[e']/i, lemma="soi"]}
  without { X[form=/soi/i, lemma="soi"]}

  without { X[form=/-?j[e']/i, lemma="moi"]}
  without { X[form=/m[e']/i, lemma="moi"]}
  without { X[form=/-?moi/i, lemma="moi"]}

  without { X[form=/t[e']/i, lemma="toi"]}
  without { X[form=/-?tu/i, lemma="toi"]}
  without { X[form=/-?toi/i, lemma="toi"]}

  without { X[form=/-?vous/i, lemma="vous"]}
  without { X[form=/-?nous/i, lemma="nous"]}

  without { X[form=/nôtres?/i, lemma="nôtre"]}
  without { X[form=/sien(ne)?s?/i, lemma="sien"]}
  without { X[form=/mien(ne)?s?/i, lemma="mien"]}
  without { X[form=/tien(ne)?s?/i, lemma="tien"]}

  without { X[form=/moi-même/i, lemma="moi-même"]}
  without { X[form=/toi-même/i, lemma="toi-même"]}
  without { X[form=/soi-même/i, lemma="soi-même"]}

  without { X[form=/lui-même/i, lemma="lui-même"]}
  without { X[form=/elle-même/i, lemma="lui-même"]}

  without { X[form=/nous-mêmes/i, lemma="nous-mêmes"]}
  without { X[form=/vous-même/i, lemma="vous-même"]}
  without { X[form=/vous-mêmes/i, lemma="vous-mêmes"]}
  without { X[form=/eux-mêmes/i, lemma="eux-mêmes"]}
  without { X[form=/elles-mêmes/i, lemma="eux-mêmes"]}
scope:
  schema: SUD
  lang: fr
level: error
type: valid
---

This validation pebble list all known `form` of personal pronouns in French.

> [!info] See also
> - [SUD#33](https://github.com/surfacesyntacticud/guidelines/issues/33)
> - [SUD#55](https://github.com/surfacesyntacticud/guidelines/issues/57)

