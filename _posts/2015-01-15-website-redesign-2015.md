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

Begin by either <a href="https://github.com/zachalbert/zachalbert.com_v6/fork">forking the repo for this website</a> or by replecating this site structure. While there is a certain amount of flexibility, <a href="http://jekyllrb.com/docs/structure/">jekyll dictates a certain directory structure</a>. (Jekyll is the tool that makes running a static blog easy by turning markdown files into html files.) I've included links to example files you can copy and customize on your own.

<pre class="highlight">
|- <strong>_posts</strong>
|--- yyyy-mm-dd-post-title.md (<a href="https://gist.githubusercontent.com/zachalbert/87465e43523e746b7e18/raw/f0c8496f3984f423886775cc8de20b4acee4935d/yyyy-mm-dd-post-title.md">example</a>)
|- <strong>_layouts</strong>
|--- default.html (<a href="https://gist.github.com/zachalbert/f5b5636ff8500387d17a">example</a>)
|- <strong>_site</strong> (<em>leave empty &mdash; your static site will be generated to this directory</em>)
|- _config.yml (<a href="https://github.com/zachalbert/zachalbert.com_v6/blob/master/_config.yml">example</a>)
|- index.html (<em>start working here</em>)
|- gulpfile.js (<a href="https://github.com/zachalbert/zachalbert.com_v6/blob/master/gulpfile.js">example</a>)
|- package.json (<a href="https://github.com/zachalbert/zachalbert.com_v6/blob/master/package.json">example</a>)
|- .gitignore (<a href="https://github.com/zachalbert/zachalbert.com_v6/blob/master/.gitignore">example</a>)
</pre>

Though not required, you should also run both `git init` and `bower init` from the command line in the root of your site directory. The first command will start a local git repo which you can later deploy to github pages to make your site public easily. Use the bower command if you're interested in using bower to manage javascript dependencies.

Setup can be tough to get used to, but once it's all working, a single command: `npm start` will start a chain of processes that installs and updates any missing dependencies, rebuilds and watches *all* of your files for changes, starts a local server with livereload and CSS inject to show your code changes realtime in the browser, rebuilds the sitemap, <em>AND</em> minifies and concatenates CSS and JS files for production.

## Deploying to Github pages

Once you have a local site you're happy with, deploying it to github pages is quite simple.

The first step is making sure you have created a repository on github.com and <a href="https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/">have pushed your local repository to it</a>. Once done, you'll be able to follow <a href="https://pages.github.com/">this helpful guide on github page's own site</a>.

Once everything is working, notice there is a block in `gulpfile.js` that automates the github pages deploy process.

{% highlight javascript linenos %}
// Deploy to github gulp-gh-pages
gulp.task('deploy', ['jekyll-build'], function() {
  return gulp.src('./_site/**/*')
    .pipe(deploy({
      remoteUrl: "git@github.com:USERNAME/REPO.git",
      branch: "master"
    }));
});
{% endhighlight %}

Once everything is working, updating your blog is easy. You just run `npm start` to begin your static site generator and local server, then add a new markdown file to the `_posts` directory. You'll be able to watch your site regenerate every time you make changes to the new post. When you're satisfied, commit your changes and run `gulp deploy` to push everything live.

_Happy building!_