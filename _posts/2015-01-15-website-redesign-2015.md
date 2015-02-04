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

Every other year I go through a molting cycle where I shed my old website and build something new. With each iteration, I try to make it a little cleaner, a little easier to use. It's an opportunity to re-examine my toolbox, and experiment with things I've been meaning to try. One of the best discoveries this cycle has been a really fast, powerful setup for building static marketing or blog sites.

It uses jekyll for the blog engine, wrapped inside gulp for handling stuff like minification and live browser reload, and the end result is a directory of lightning fast vanilla HTML. By deploying to github pages, the tedium surrounding just getting a website live is gone. This is the *perfect* setup for prototyping websites and landing pages. None of these tools are particularly new, but the speed and ease of putting a real website online shocked me.

You can follow along if you want to duplicate my setup. It should be easy enough to use for designers who aren't afraid of a bit of command line.

<!-- more -->

## Out with the old

This is v5 of my site (2013 edition), which you can <a href="https://web.archive.org/web/20140807023329/http://www.zachalbert.com/">check out on archive.com</a> if you're bored.

<img src="/images/zhd-v5.jpg" width="600" height="300" class="img-border">


## The design

Since personal sites have very few design or technical constraints, I wanted to experiment with some new grid systems. I used <a href="http://flexboxgrid.com/">flex box grid system</a>, which I'd highly recommend. It's worth mentioning that <a href="http://foundation.zurb.com/apps/">Foundation for Apps</a> was recently released, which also uses a flexbox grid system &mdash; though I personally haven't tried it yet.

Working with flexbox was not all that different from working with a standard bootstrap or foundation grid system, except the grid blocks tend to have slightly more sensical behavior than I'm familiar with. Because I'm used to the old way, there's a bit of a learning curve to pick it up &mdash; but it's hardly noticeable.

Typographically speaking, I chose <a href="https://typekit.com/fonts/abril-text">Abril Text</a> for body copy and <a href="https://typekit.com/fonts/abril-titling">Abril Titling</a> for headlines. Its history in editorial work and tasty italic lean complimented my odd 2/3 layout and matched the whitespacey look I was going for. I used <a href="http://www.type-scale.com">Type Scale</a> to build a font-size scale, and used that same scale to create strips of 'lead' spacers (an homage to moveable lead type). All block-level elements such as `section` and `p` tags receive either one, two, or three lead on the bottom only to create a satisfying vertical rhythm. The net result is that multiple columns of text will _always_ be baseline-aligned since the measurements are based on the same building blocks.

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

## Gulpfile.js &amp; Automation

Begin by either <a href="https://github.com/zachalbert/zachalbert.com_v6/fork">forking the repo for this website</a> or by replecating this site structure. While there is a certain amount of flexibility, <a href="http://jekyllrb.com/docs/structure/">jekyll dictates a certain directory structure</a>. (Jekyll is the tool that makes running a static blog easy by turning markdown files into html files.) I've included links to example files you can copy.

* _posts
** yyyy-mm-dd-post-title.md
* _layouts
** default.html (<a href="https://gist.github.com/zachalbert/f5b5636ff8500387d17a">example</a>)
* _config.yml (<a href="">example</a>)
* index.html ()
* _config.yml (<a href="">example</a>)

<script src="http://gist-it.appspot.com/github/zachalbert/zachalbert.com_v6/blob/master/gulpfile.js"></script>

### Site St

The root o

## Jekyll integration within gulp

Yay...

## Deploying to Github pages

Yay...

