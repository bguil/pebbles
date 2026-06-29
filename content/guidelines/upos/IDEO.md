---
title: IDEO
request: pattern { X[upos = IDEO] }
scope:
  schema: SUD
  extended: true
type: doc
tags:
 - upos
---


# Ideophone

<conll>
# lang = ha
# sent_id = 09_Salman_Rushdie_13
# text_en = In fact, they themselves did not want it to be published at all.
# text_ortho = Àsheː suː maː ɗîn samsam baːsàː sôn à bugàː shi.
# text = àsheː suː maː ɗîn samsam baːsàː sôn à bugàː shi.
1	àsheː	àsheː	INTJ	_	_	6	discourse	_	Gloss=in_fact
2	suː	suː	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	dislocated@subj	_	Gloss=3Plur.Nom
3	maː	maː	PART	_	PartType=Top	2	discourse@top	_	Gloss=even
4	ɗîn	ɗin	DET	_	Definite=Def	2	det	_	Gloss=Def
5	samsam	samsan	IDEO	_	_	6	mod	_	Gloss=absolutely
6	baːsàː	nàː	AUX	_	Aspect=Prog|Number=Plur|Person=3|Polarity=Neg	0	root	_	Gloss=3Plur.Prog.Neg
7	sôn	soː	VERB	_	Definite=Cons|ExtPos=NOUN|Gender=Masc|VerbForm=Vnoun	6	comp:aux	_	Gloss=want.Vnoun.Masc.Cons
8	à	yà	AUX	_	Mood=Sub|Person=4	7	comp:obj	_	Gloss=4.Sub
9	bugàː	bug-	VERB	_	_	8	comp:aux	_	Gloss=print
10	shi	shi	PRON	_	Case=Acc|Gender=Masc|Person=3|PronType=Prs	9	comp:obj	_	Gloss=3Masc.Acc|SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	Gloss=PUNCT
</conll>

> [!hint]
```coversion
  rule IDEO_with_extpos {
    pattern { N[upos=IDEO, ExtPos] }
    commands { 
      N.upos=N.ExtPos;
      N.Ideophon=Yes; 
      del_feat N.ExtPos;
      del_feat N.Gender;
      del_feat N.Definite;
      del_feat N.PronType;
    }
  }

  rule IDEO_without_extpos {
    pattern { N[upos=IDEO, !ExtPos] }
    commands { 
      N.upos=X; 
      N.Ideophon=Yes; 
      del_feat N.Gender;
      del_feat N.Definite;
      del_feat N.PronType;
    }
  }
```