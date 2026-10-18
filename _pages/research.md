---
layout: page
permalink: /research/
title: Research
description: My publications and preprints.
nav: true
nav_order: 2
---

<!-- _pages/research.md -->

You can also find my work on [Google Scholar](https://scholar.google.com/citations?user=RrzelsgAAAAJ).

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography">Publications</h2>
{% bibliography --group_by none --query @*[status=published]* %}

<h2 class="bibliography">Preprints</h2>
{% bibliography --group_by none --query @*[status=preprint]* %}

</div>
