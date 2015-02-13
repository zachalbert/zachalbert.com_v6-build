---
published: true
title: A Rapid Prototyping Toolbox for Designers with Jekyll and Foundation 4
author: zac
layout: post
permalink: /rapid-prototyping-toolbox-for-designers/
comments: true
categories:
  - Code
  - Content
---
Learn how to rapidly prototype marketing websites or blogs with a simple set of tools&#8211;Jekyll and Foundation 4. This isn&#8217;t necessarily the **fastest** way to build a prototype, but this is the most extensible way I&#8217;ve found that allows you to move seamlessly from prototype to production. I built [WelcomeMat.co][1] in order to test these tools in a somewhat-real-world environment.

<span class="alert">**EDIT [01/15/2015]:** This post is a bit out of date. I now recommend checking out my new post for <a href="/website-redesign-2015/">rapid prototyping static websites using gulp and jekyll</a>.</span>

<!-- more -->
<div class="anchor-offset" id="more"></div>

<figure>
  <img class="size-full wp-image-522 " alt="A Rapid Prototyping Toolbox with Jekyll + Foundation 4" src="/images/foundation-zurb-3.jpg" width="1600" height="832" />
</figure>

[Check out the site][1] (and make sure to resize the browser to notice how responsivey it is). Although it houses dynamic content which changes on a fairly regular basis, it&#8217;s a straight, static .HTML document. This is the key to Jekyll. It gives you the ability to build a site with a powerful templated structure similar to WordPress or other Blogging/CMS systems, but it compiles to good ol&#8217; HTML. No pesky databases or giant bloated systems to worry about.

There are certainly downsides to learning Jekyll, too. There&#8217;s a bit of a learning curve (though it&#8217;s smaller than learning to build custom templates with WordPress). The community of support and plugin development isn&#8217;t as robust as WordPress or Drupal. The community that ***is ***there tends to be more developer-minded, which may be a bit scary for a designer (I was certainly intimidated when I started). Having said that, these tools are perfect for getting your ideas out quickly, and are much simpler to learn than you think.

Foundation is a frontend framework that gives you baked-in support for responsive grid systems, modals, image carousels, etc. It makes it easy to do 95% of what you&#8217;d want to do for a blog or marketing site, and makes CSS layout more sensical (once you learn the system).

## Prerequisites

Before diving into Jekyll and Foundation 4, you should have a reasonable grasp on HTML and CSS. You don&#8217;t need to be an expert, though you should know how to Google markup structures you&#8217;re unfamiliar with. Though Javascript or dynamic scripting experience helps, it&#8217;s not **required**. It will simply make it easier to work with Foundation&#8217;s included Javascript components.

## What the perfect rapid prototyping toolbox looks like

I&#8217;ve used a few tools during the course of my career building Internet, but certainly not all of them. I&#8217;m not out to find the very best of the best, but rather the tools that satisfy my criteria for success. They should:

<ol id="success-criteria">
  <li>
    …have a short learning curve, with hidden power that I can introduce over time, as I have time.
  </li>
  <li>
    …be able to accommodate sweeping changes easily, without rebuilding structure or duplicating work.
  </li>
  <li>
    …be able to move seamlessly from prototype to production in order to put some real mileage on the prototype.
  </li>
  <li>
    …make it easy to add slightly more complex javascript functionality like modals, suckerfish menus, image carousels, and so on.
  </li>
  <li>
    …get out of the way and allow me to think about the product design, rather than implementation details.
  </li>
</ol>

*(Sidenote: As I mentioned, this article is about building a blog or marketing website. For app prototyping, I recommend you check out [meteor.js][7], and the awesome book [Discover Meteor][8], by the eminent and productive team of [Sacha Grief][9] and [Tom Coleman][10]. I&#8217;m still too early in the book to say a whole lot about it, other than &#8220;be not afraid&#8221;—they make the topic very approachable. I look forward to the horde of designer-developed apps that will soon be released into the wild thanks to their tireless work.)*

*(Side-sidenote: It was pointed out by [@davebarnow][11] that [Mixture.io][12] does much of the static site generation and site management stuff for you, obfuscating some of the complexities behind a nice UI. Full disclaimer—I haven&#8217;t used Mixture for a real project yet, as I prefer to understand what&#8217;s going on under the hood first. It&#8217;s an awesome app (though the onboarding inside the app could use some work), and you should absolutely [check it out][12] if it helps you crank out your ideas quicker).*

## Here&#8217;s what my rapid prototyping toolbox looks like

The main stars of the toolbox are Jekyll and Foundation 4. However I&#8217;ll also point out some of the supporting tools, as well as why I picked them.

### Jekyll

Jekyll is a so-called &#8220;blog aware static site generator.&#8221; This means it&#8217;s similar to blogging engines like WordPress, which are built to showcase episodic content and use a database to build a webpage from &#8220;includes&#8221; (or &#8220;partials&#8221;). Includes allow you to have a single file that contains the content for your header, a single file for your footer, and so on—allowing you to [make your logo bigger][13] in a single file instead of copying and pasting your changes to every page of your site.

Jekyll is a bit different than a system like WordPress, in that there is no database, and no admin interface. All your &#8220;posts&#8221; are simple HTML or Markdown files located in a particular directory of your site. You still have most of the functionality of a database-driven website, like being able to add your own meta data to a post (for WelcomeMat.co, I have attributes on each post called title, size, author, and authorURL). The net result of a Jekyll site, however, is that it outputs plain ol&#8217; HTML. Few things are more performant than straight HTML. It also makes deploying your code a breeze, since you&#8217;re simply moving everything in your &#8220;_site&#8221; directory to your server. Here&#8217;s a great tutorial on [getting started with Jekyll][14].

### ZURB Foundation 4

[Foundation][15] provides you with a markup and CSS template so you can rapidly build out a design based on a 12 column grid. It&#8217;s a popular but lesser-known competitor to [Twitter Bootstrap][4], which has made it possible for developers to build sites that all look the same for years. You could substitute Boostrap for Foundation if you know it better, or any of the other [myriad frontend frameworks][16] to the same effect. I prefer Foundation because it uses a grid system that is responsive by default, and gives you access to a small grid and a large grid. This means you can define how your site should look on mobile devices up to iPad size, and how it should look on devices larger than that. You can easily modify your CSS to add more granular breakpoints, but starting with a small device and a large device makes it achingly simple to make your site responsive by default (I hadn&#8217;t intended to make WelcomeMat.co responsive when I started building, but Foundation made it silly not to).

On top of that, Foundation is a tad plainer by default, which encourages you to do *something* other than the default styling. As a designer, I give this two thumbs up. If you&#8217;re a lazy designer, then use Bootstrap (but don&#8217;t be a lazy designer). [The Foundation Docs][17] are <strike>well-written and a very complete place to start learning about it</strike> _(I'm told by many they're not that great, so I withdraw this assertion)_. Another big reason I prefer Foundation is that it&#8217;s written in SASS by default. Which leads me too…

### [SASS/Compass][18]

CSS preprocessors completely changed my life (at the apex of a period when I arrogantly thought there was nothing new to be learned with CSS. D&#8217;oh!). Foundation is written in SASS, which makes it very easy to use with [SASS/Compass][18]. Compass is a library that extends SASS, though I largely use it because it makes compiling your SASS to CSS very easy and doesn&#8217;t require you to learn new syntax. This allows me to write the same CSS I&#8217;m used to, and only bring in the more powerful features (like variables, mixins or functions, etc.) when I have a reason to. This satisfies criteria #1: short learning curve, with hidden power I can learn over time. In fact, you can copy over straight CSS into an SCSS file (the extension for SASS/Compass) and it&#8217;ll still work.

People who know stuff about things will tell you 1,000 reasons why LESS is better than SASS, or Stylus is better than everything else. I try not to get dragged into discussions like that, and instead focus on the tools that make me more productive (needing to re-read the documentation for every project you start because you can&#8217;t settle on a toolset is the definition of unproductive, in case you were wondering). You don&#8217;t even *have* to use the terminal to use Compass if you don&#8217;t want to (though seriously, suck it up). [Scout][19] gives you a GUI alternative, though I&#8217;ve personally never used it before. The [Compass Docs][20] are a decent place to start, as is [CSS-Tricks][21].

### Icon Fonts

I&#8217;m currently in love with both [Geomicons][22] and [SymbolSet Pika][23]. Icon fonts give you the ability to rapidly add icons by simply adding classes to your markup like &#8220;icon-home.&#8221; Plus, you can control the look with CSS rules in the same way you can control the look of text with CSS (since the icon ***is*** text). Additionally, they&#8217;re vector based so will look good no matter how pixel-dense the screen. Icon fonts allow you to stay in the code without futzing with image exports (and @2x exports for high-density screens). Overall, this will make you faster. Again, allow me to [let the illustrious Chris Coyier convince you that you should be using icon fonts][24].

To build your own icon font from SVG files or pick from some awesome icon font sets, check out [IcoMoon.io][25] or [Fontello][26]. I used IcoMoon to generate the icons for this site.

### Webfonts

[Google Fonts][27], [Typekit][28], and numerous other services give us access to real typography like we&#8217;ve never had before. We&#8217;re no longer restricted to Georgia, Helvetica, et al. In fact, we&#8217;re really only limited to the fonts that are available on these services. Many ridiculously more qualified people than myself have written copious amounts about the state of web typography, so suffice to say, when you start a design, see what&#8217;s available before you settle on typography. I like to pick my type by looking at Google Fonts and Typekit and taking a screenshot to mock it up. It&#8217;s currently a little tough to get these typefaces loaded on your machine to play around with in Photoshop or Illustrator (though Google Fonts do allow you to download your choices). This is supposed to be changing soon with many major webtype services launching desktop versions.

### Amazon S3

[Amazon S3][29] has made hosting a complete breeze. I no longer have to worry about getting a hosting account set up, or worry about what getting an influx of traffic will do to my hosting bill. S3 will adapt to the needs of your site, and it&#8217;s pretty cheap too. For your prototypes that get no attention, it&#8217;s basically free to keep them running (aside from your yearly domain registration). Synching your files to S3 is still a bit of a chore, and a topic for another day. The benefits far outweigh the cons, though.

## Conclusion

This toolbox isn&#8217;t necessarily the best one out there, but it&#8217;s allowed me to transition my janky coding skills to being able to release reasonably stable websites&#8211;*quickly*. There are many alternative configurations, but I&#8217;d encourage you to create your own list of [success criteria][30] for what you want your tools to accomplish. Since web designers are raccoons, it&#8217;s easy to get distracted by bright, shiny objects. A list of success criteria will help keep you productive instead of distracted.

Do you have a rapid prototyping toolbox? What does it look like?

 [1]: http://welcomemat.co
 [2]: http://www.twitter.com/probablymonty
 [3]: http://www.twitter.com/zachalbert
 [4]: http://twitter.github.io/bootstrap/
 [5]: http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/
 [6]: http://www.twitter.com/gesa
 [7]: http://meteor.com/
 [8]: http://www.discovermeteor.com/
 [9]: http://sachagreif.com/
 [10]: http://tom.thesnail.org/
 [11]: https://twitter.com/davebarnow
 [12]: http://mixture.io/
 [13]: http://rocketmedia.com/blog/article/the-danger-of-asking-your-web-designer-to-make-the-logo-bigger#.UcHMlfZ0se0
 [14]: https://learn.andrewmunsell.com/learn/jekyll-by-example
 [15]: http://foundation.zurb.com/
 [16]: http://usablica.github.io/front-end-frameworks/compare.html
 [17]: http://foundation.zurb.com/docs/
 [18]: http://compass-style.org/
 [19]: http://mhs.github.io/scout-app/
 [20]: http://compass-style.org/reference/compass/
 [21]: http://css-tricks.com/video-screencasts/88-intro-to-compass-sass/
 [22]: http://geomicons.com/
 [23]: http://symbolset.com/icons/pika
 [24]: http://css-tricks.com/examples/IconFont/
 [25]: http://icomoon.io/app/
 [26]: http://fontello.com/
 [27]: http://www.google.com/fonts
 [28]: https://typekit.com/fonts
 [29]: http://aws.amazon.com/s3/
 [30]: #success-criteria
 [31]: http://www.zachalbert.com/website-redesign-2015/