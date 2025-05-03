<?xml version='1.0'?>

<!--********************************************************************
Copyright 2019 Oscar Levin

This file is part of PreTeXt.

PreTeXt is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 or version 3 of the
License (at your option).

PreTeXt is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with PreTeXt.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************-->

<!-- Conveniences for classes of similar elements -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace"
>

<!-- Override specific tenplates of the standard conversion -->
<!-- <xsl:import href="../mathbook-latex.xsl" /> -->

<!-- Intend output for rendering by pdflatex -->
<xsl:output method="text" />

<!-- %%%%%%%%%%%%% -->
<!-- Title Styles: -->
<!-- %%%%%%%%%%%%% -->

<xsl:template name="titlesec-chapter-style">
    <xsl:text>\titleformat{\chapter}[hang]
    	{\Huge\scshape\bfseries}
    	{\color{PineGreen}\smash{\raisebox{-2em}{\resizebox{!}{3em}{\thechapter}}}}
    	{.5em}
    	{\color{Periwinkle!66!black}#1}
    	[]
    \titlespacing*{\chapter}{-2em}{*1}{2.6cm}&#xa;</xsl:text>
    <!-- <xsl:text>\titleformat{name=\chapter,numberless}
      {\Large\filcenter\scshape\bfseries}
    	{\rule[4pt]{.3\textwidth}{2pt} \hspace{2ex} \large\textsc{\chaptertitlename} \thechapter \hspace{3ex} \rule[4pt]{0.3\textwidth}{2pt} }
    	{0.0em}
    	{\titlerule\vspace{1ex}\huge\textsc #1}
    	[\vspace{.75ex}\titlerule]
    \titlespacing*{\chapter}{0pt}{-2em}{2em}&#xa;</xsl:text> -->
    <xsl:text>\titleformat{\subparagraph}[block]
      {\normalfont\filcenter\scshape\bfseries}
      {\theparagraph}
      {1em}
      {#1}
      [\normalsize\authorsptx]&#xa;</xsl:text>
</xsl:template>

<xsl:template name="titlesec-section-style">
    <xsl:text>\titleformat{\section}
    {\LARGE\scshape\bfseries}
    {\color{PineGreen}\llap{\large\thesection\enskip}}
    {0pt}
    {\color{Periwinkle!66!black}#1}
    [\large\authorsptx]&#xa;</xsl:text>
    <xsl:text>\titleformat{name=\section,numberless}
    {\scshape\bfseries}
    {}
    {0.0em}
    {\color{Periwinkle!66!black}#1}&#xa;</xsl:text>
</xsl:template>

<xsl:template name="titlesec-subsection-style">
    <xsl:text>\titleformat{\subsection}
    {\large\scshape\bfseries}
    {\thesubsection}
    {1em}
    {\color{Periwinkle!66!black}#1}
    [\normalsize\authorsptx]&#xa;</xsl:text>
</xsl:template>

<xsl:template name="titlesec-subsubsection-style">
    <xsl:text>\titleformat{\subsubsection}
      {\scshape\bfseries}
      {\thesubsubsection}
      {1em}
      {\color{Periwinkle!66!black}#1}
      [\normalsize\authorsptx]&#xa;</xsl:text>
</xsl:template>

<!-- %%%%%%%%%%%%%%%% -->
<!-- End Title Stiles -->
<!-- %%%%%%%%%%%%%%%% -->



<!-- %%%%%%%%%%%%%%%%%%%%%%%% -->
<!--  Header/Footer Stiles    -->
<!-- %%%%%%%%%%%%%%%%%%%%%%%% -->

<xsl:template match="book" mode="titleps-style">
    <xsl:text>%% Page style configuration&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% Plain pages should have the same font for page numbers&#xa;</xsl:text>
    <xsl:text>\renewpagestyle{plain}{%&#xa;</xsl:text>
    <xsl:text>\setfoot{}{\pagefont\textsl{\thepage}}{}%&#xa;</xsl:text>
    <xsl:text>}%&#xa;</xsl:text>
    <xsl:text>
      \renewpagestyle{headings}{%
        \sethead[{\footnotesize \textsl{\thepage}}~~~ \textsc{\scriptsize{\ifthechapter{\thechapter.~}{}\chaptertitle}}][][]
        {}{}{\textsc{\scriptsize{\ifthesection{\thesection.~\sectiontitle}{\chaptertitle}}} ~~~ {\footnotesize \textsl{\thepage}} }
      }
    </xsl:text>
    <xsl:text>\pagestyle{headings}&#xa;</xsl:text>
</xsl:template>

<!-- %%%%%%%%%%%%%%%%%%%%%%%% -->
<!-- End Header/Footer Stiles -->
<!-- %%%%%%%%%%%%%%%%%%%%%%%% -->





<!-- %%%%%%%%%%%%%%%% -->
<!-- Block styles     -->
<!-- %%%%%%%%%%%%%%%% -->

<!-- A general strategy: put frame hidden, and then use borderline to get borders.  This prevents hairline borders at page breaks, and allows for selecting just some sides for the frame. -->


<!-- "commentary" -->
<!-- Green and ugly -->
<!-- <xsl:template match="commentary" mode="tcb-style">
    <xsl:text>enhanced, breakable, parbox=false, size=minimal, attach title to upper, after title={\space}, fonttitle=\scshape\bfseries, coltitle=black, colback=green</xsl:text>
</xsl:template> -->

<!-- "objectives", "outcomes" -->
<!-- Default tcb, identically -->
<xsl:template match="objectives|outcomes" mode="tcb-style">
  <xsl:text>
    enhanced,
    parbox=false,
    fonttitle=\bfseries\scshape\itshape\large,
    coltitle=black,
    attach boxed title to top left={xshift=5mm,yshift=-\tcboxedtitleheight/2-1mm,yshifttext=-2mm},
    boxed title style={frame hidden, colback=white, arc=3pt},
    boxed title size=title,
    frame hidden,
    borderline horizontal={.6pt}{0mm}{RoyalPurple!65!black},
    colback=white,
    width=0.98\linewidth,
    bottom=5mm,
    center,
    after skip=2em,
  </xsl:text>
</xsl:template>

<!-- "assemblage" -->
<!-- Boxed title, borrowed from the AIM style -->
<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>
      enhanced, 
      frame hidden,
      borderline={.6pt}{1pt}{SkyBlue!60},
      sharp corners=uphill, 
      arc=4pt,
      colback=SkyBlue!25, 
      colbacktitle=SkyBlue!60, 
      coltitle=black, 
      boxed title style={arc=3pt, frame hidden},
      fonttitle=\scshape\bfseries, 
      attach boxed title to top left={xshift=4mm,yshift=-4mm,yshifttext=-2mm},
      top=3mm,
      after skip=1em,
    </xsl:text>
</xsl:template>

<xsl:template match="&THEOREM-LIKE;|&AXIOM-LIKE;" mode="tcb-style">
    <xsl:text>
      enhanced, 
      frame hidden,
      parbox=false,
      borderline={.6pt}{0mm}{Periwinkle!40},
      borderline north={1.2pt}{-0.6pt}{Periwinkle!50},
      sharp corners=north, 
      arc=4pt,
      colback=Periwinkle!5, 
      colbacktitle=Periwinkle!50, 
      coltitle=black, 
      boxed title style={sharp corners=south, arc=3pt, frame hidden},
      titlerule=2pt,
      fonttitle=\bfseries\scshape, 
      attach boxed title to top left={xshift=4mm,yshifttext=-2mm, yshift=-1pt},
      top=0mm,
      after skip=1em,
    </xsl:text>
</xsl:template>

<xsl:template match="proof" mode="tcb-style">
    <xsl:text>bwminimalstyle, parbox=false, fonttitle=\normalfont\scshape\bfseries, attach title to upper, after title={\space\space}, width=.98\linewidth&#xa;</xsl:text>
</xsl:template>

<xsl:template match="definition" mode="tcb-style">
    <xsl:text>
      enhanced, 
      frame hidden,
      parbox=false,
      borderline={.6pt}{1pt}{PineGreen!40},
      sharp corners=north, 
      arc=4pt,
      colback=PineGreen!5, 
      colbacktitle=PineGreen!40, 
      coltitle=black, 
      boxed title style={arc=2pt, frame hidden},
      fonttitle=\scshape\bfseries, 
      attach boxed title to top left={xshift=4mm,yshift=-4mm,yshifttext=-2mm},
      top=3mm,
      after skip=1em,
    </xsl:text>
</xsl:template>






<!-- EXAMPLE-LIKE: "example", "question", "problem" -->
<!-- Default tcolorbox, but with tricolor titles    -->
<!-- Each just slightly different                   -->

<!-- Example styling from CLP -->
<xsl:template match="&EXAMPLE-LIKE;|exercise[boolean(&INLINE-EXERCISE-FILTER;)]" mode="tcb-style">
    <xsl:text>
      enhanced,
      breakable,
      parbox=false,
      frame hidden,
      overlay first and middle={
        \draw[MidnightBlue,  line width=.6pt] 
        ([xshift=.6pt]frame.north west)  -- (frame.south west); 
      },
      overlay unbroken and last={
        \draw[MidnightBlue,  line width=.6pt, path fading=east, rounded corners=4pt] 
        ([xshift=.6pt]frame.north west)  |- (frame.south east); 
      },
      colback=white,
      coltitle=white,
      fonttitle=\bfseries\scshape\sffamily,
      attach boxed title to top left={xshift=0mm},
      boxed title style={colback=MidnightBlue, sharp corners=south, arc=3pt, colframe=MidnightBlue},
      boxed title size=title,
      after skip=1em,
      before skip=1em,
    </xsl:text>
</xsl:template>

<xsl:template match="&PROJECT-LIKE;" mode="tcb-style">
  <xsl:text>
    enhanced,
    parbox=false,
    fonttitle=\bfseries\scshape\itshape\large,
    coltitle=black,
    attach boxed title to top left={xshift=5mm,yshift=-\tcboxedtitleheight/2},
    %title=Investigate!,
    boxed title style={frame hidden, colback=white, sharp corners=south, arc=3pt},
    boxed title size=title,
    frame hidden,
    borderline={.6pt}{0mm}{teal!45!black},
    arc=4mm,
    colback=white,
    width=0.98\linewidth,
    bottom=5mm,
    center,
    after skip=2em,
  </xsl:text>
</xsl:template>

<!-- The following are blocks not yet styled (thus commented) -->
<!-- but could be some day                                    -->

<!-- <xsl:template match="&THEOREM-LIKE;" mode="tcb-style">
  <xsl:text/>
</xsl:template> -->


<!-- <xsl:template match="proof" mode="tcb-style">
  <xsl:text>breakable, parbox=false, borderline west={.5pt}{0mm}{red}</xsl:text>
</xsl:template> -->

<!-- DEFINITION-LIKE: "definition"   -->
<!-- Various extreme choices from the tcolorbox documentation -->
<!-- Note: a trailing comma is OK, and maybe a good idea      -->
<!-- Note: the style definition may split across several line -->
<!-- of the LaTeX source using the hex A (dec 10) character   -->
<!-- Note: "enhanced" is necessary for boxed titles           -->
<!-- <xsl:template match="&DEFINITION-LIKE;" mode="tcb-style">
  <xsl:text>breakable, parbox=false, colframe=MidnightBlue, colback=MidnightBlue!5, colbacktitle=MidnightBlue!70, coltitle=black, enhanced, attach boxed title to top left={xshift=7mm, yshift*=-2ex},sharp corners=uphill=northwest, arc=10pt,</xsl:text>
</xsl:template> -->

<!-- REMARK-LIKE: "remark", "convention", "note",   -->
<!--            "observation", "warning", "insight" -->
<!-- COMPUTATION-LIKE: "computation", "technology"  -->
 <!--White title text, but title backgounds vary    -->
 <!--by category, and remarks have sharp corners=uphill    -->
<xsl:template match="&REMARK-LIKE;" mode="tcb-style">
  <xsl:text>
    runintitlestyle,
    enhanced, 
    frame hidden,
    parbox=false,
    borderline={1.2pt}{0mm}{Thistle!40},
    borderline west={2.4pt}{0mm}{Thistle},
    sharp corners,
    arc=4pt, 
    colback=Thistle!20, 
    colbacktitle=Thistle!20, 
    coltitle=Thistle!66!black, 
    fonttitle=\bfseries\scshape,
    top=2mm,
    after title={\space\space},
  </xsl:text>
</xsl:template>

<xsl:template match="&ASIDE-LIKE;" mode="tcb-style">
    <xsl:text>
      runintitlestyle,
      enhanced, 
      frame hidden,
      parbox=false,
      borderline={1pt}{0mm}{Thistle!20},
      borderline west={1pt}{0mm}{Thistle!50},
      sharp corners=uphill, 
      arc=4pt,
      colback=Thistle!20, 
      colbacktitle=Thistle!20, 
      coltitle=black, 
      top=2mm,
      title={By the way...},
      after title={\space}, 
      after skip=1em
    </xsl:text>
</xsl:template>

<!-- %%%%%%%%%%%%%%%% -->
<!-- End Block Stiles -->
<!-- %%%%%%%%%%%%%%%% -->


</xsl:stylesheet>
