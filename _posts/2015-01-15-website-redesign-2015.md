---
title: Website Redesign, 2015 Edition
subtitle: Static site generated using gulp, jekyll, and SCSS, hosted on github.
author: zac
layout: post
permalink: /website-redesign-2015/
comments: true
categories:
  - News
  - Portfolio
---

Every other year I go through a molting cycle where I shed my old website and build something new. With each iteration, I try to make it a little cleaner, a little easier to use. I've finally acheived a really fast development environment for building static websites such as this one. It uses jekyll for the blog engine, wrapped inside gulp for handling stuff like minification and live browser reload, and the end result is a directory of lightning fast vanilla HTML. By deploying to github pages, the tedium surrounding just getting a website live is gone. This is the *perfect* setup for prototyping websites and landing pages.

<!-- more -->

### Out with the old

This is v5 of my site (2013 edition), which you can <a href="https://web.archive.org/web/20140807023329/http://www.zachalbert.com/">check out on archive.com</a> if you're bored.

<img src="/images/zhd-v5.jpg" width="600" height="300" class="img-border">


## The design

Since personal sites have very few design or technical constraints, I wanted to experiment with some new grid systems. I used <a href="http://flexboxgrid.com/">flex box grid system</a>, which I'd highly recommend. It's worth mentioning <a href="http://foundation.zurb.com/apps/">Foundation for Apps</a>, which also uses a flexbox grid system &mdash; though I personally haven't tried it yet.

Once I had the flexibility of a new grid, it was pretty easy to experiment with layout combinations such as the 2 column view I went with. 

Typographically speaking, I went with _Abril from Typekit_. Its history in editorial work and tasty italics fit the whitespacey look I was going for. I used _type-scale.com_ to build a font-size scale, and used that same scale to create strips of 'lead' spacers. All block-level elements receive either one, two, or three spacers depending on the needs of the design.

{% highlight scss linenos %}
////// Type Scale //////

$scale: 1.618;
$font-size: 17px;

// All spacing is based on this variable
$line-height: round($font-size * $scale);

// type-scale.com
$font-size-05:  0.618em;
$font-size-1:   $font-size;
$font-size-2:   1.618em;
$font-size-3:   2.618em;
$font-size-4:   4.236em;

// Strips of lead - all block level elements get margin bottom only
$lead-half:        $line-height / 2;
.lead-half       { margin-bottom: $line-height / 2; }

$lead-single:      $line-height;
.lead-single     { margin-bottom: $line-height; }

$lead-double:      $line-height * 2;
.lead-double     { margin-bottom: $line-height * 2; }

$lead-triple:      $line-height * 3;
.lead-triple     { margin-bottom: $line-height * 3; }

$lead-quadruple:   $line-height * 4;
.lead-quadruple  { margin-bottom: $line-height * 4; }

$lead-quintuple:   $line-height * 5;
.lead-quintuple  { margin-bottom: $line-height * 5; }
{% endhighlight %}

## The code

