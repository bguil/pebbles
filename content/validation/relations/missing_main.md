---
title: Valid SUD deprel
request: pattern { X -[!1]-> Y }
scope:
  schema: SUD
level: error
type: valid
---

A dependency relation cannot appear without a **main** relation label.