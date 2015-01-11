---
title: Auto-blog Your Dribbble Shots to WordPress
author: zac
layout: post
permalink: /auto-blog-dribbble-shots-to-wordpress/
categories:
  - Content
---
## Want to know how to **auto-blog your Dribbble shots to WordPress?** [My portfolio][1] is entirely populated by my Dribbble feed which makes it significantly easier to maintain my website.

It&#8217;s quite simple, thanks to some awesome work by [Tammy Hart][2]. There are [quite][3] [a][4] [few][5] “Dribbble shots to WordPress” auto-blogging plugins that will help you do it, but I found that I either couldn&#8217;t get them to work as expected, or they didn&#8217;t give me the flexibility that I needed. For instance, some plugins limit the number of shots to your 10 most recent, or will put your shots in a revolving slideshow. It&#8217;s entirely likely that the plugins weren&#8217;t working out for me because the WordPress template I use for this site is heavily customized (I coded it by hand using the [awesome starkers template as a starting point][6]), or I simply didn&#8217;t have the skill to modify the plugins.

### TL;DR — A Link to the Code

If you already know all about WordPress custom post types, here&#8217;s a link to Tammy&#8217;s [Dribbble shots to WordPress][7] code. If you want to know [how I used the auto-blogging code on this site][1], read on.

### Enter Custom Post Types

With the introduction of WordPress 3.0, [blog posts now have the concept of &#8220;post type.&#8221;][8] Post types provide a lot of added flexibility to your design because it allows you to manage content in the same way you&#8217;re used to, but display it differently in your view. Tammy&#8217;s code creates a new *custom post type* called &#8220;shot,&#8221; which gets automatically populated by the RSS feed Dribbble generates for you. [Here&#8217;s what mine looks like][9] — just add `/shots.rss` to the end of your Dribbble portfolio link to see your feed.

<img class="alignright size-full wp-image-346" alt="dribbble-shots" src="/images/dribbble-shots.png" width="324" height="130" />

Add [the code][7] to `functions.php` in your theme directory, and you&#8217;ll notice this custom post type appear in the side nav of your WordPress admin. This gives you a quick way to verify that your Dribbble shots are being populated correctly.

### Show Only Dribbble Shots in Your Template

Once your Dribbble shots are in your database, it&#8217;s a fairly simple matter to pull them out and display them differently than your other content. I have a custom page template called `portfolio.php` that uses a custom `wp_query` just before the WordPress loop. This query will only pull posts that are of the type `shot`.

`<?php<br />
$query = new WP_Query( 'post_type=shot' );<br />
if ( $query->have_posts() ):<br />
?>`

### Control the Display

To see how I implemented the Dribbble shots to WordPress auto-blogging code, check out [my portfolio page][1]. It&#8217;s pretty basic at this point, but your options for controlling the display of your shots are limitless. Please leave a comment if you have any more questions about the process.

Thanks, [Tammy][2]!

 [1]: http://www.zachalbert.com/portfolio/ "Portfolio"
 [2]: http://www.tammyhartdesigns.com/
 [3]: http://wordpress.org/extend/plugins/wp-dribbble-shots/
 [4]: http://wordpress.org/extend/plugins/highlight-reel/
 [5]: http://wordpress.org/extend/plugins/slidewizard/
 [6]: http://viewportindustries.com/products/starkers/
 [7]: http://forrst.com/posts/Dribbble_to_WordPress-wZv
 [8]: http://codex.wordpress.org/Post_Types
 [9]: http://dribbble.com/zachalbert/shots.rss