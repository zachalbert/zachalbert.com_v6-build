---
title: JPG Images with PNG Transparency
author: zac
layout: post
permalink: /jpg-images-with-png-transparency/
comments: true
categories:
  - Tips
  - Code
---
JPG images provide small file sizes, but don&#8217;t give you the flexibility of transparency. PNGs provide you with transparency, but don&#8217;t compress visually complex images very well. I have been experimenting with a technique to get the best of both worlds.

<!-- more -->
<div class="anchor-offset" id="more"></div>

Before we begin, let me first say that the *best* solution is to set `overflow: hidden` on a parent element that contains a compressed JPG, as in the case of round avatars. Using CSS3 and the `border-radius` property, you can simulate round corners on an image pretty easily. This technique works because the part you want to be transparent (the mask) is a *regular shape*. However, if you need your mask to be an *irregular* shape, then you&#8217;re stuck using PNGs and dealing with a large file size. The problem is compounded by the fact that you now have 2x retina images to worry about, making file size even more of an issue.

### A Real World Scenario

<img class="align-right" alt="Wood panel with PNG transparency" src="/images/what-are-you-into.png" width="200" height="150" />This isn&#8217;t just a theoretical problem. Here&#8217;s an example of a project I did a while ago that required an irregular mask. To give you some context, the wood panel was stationary, and the images behind it would rotate every few seconds. The wood texture made the final PNG abnormally large. The audience didn&#8217;t universally have good bandwidth (something you *still* can&#8217;t count on in 2013). I needed to find a solution that would give me the small file size of a JPG, but allow for the 24-bit transparency of a PNG.

The solution was pretty simple, though a little labor-intensive. For the sake of simplicity, I&#8217;m going to demonstrate this technique with a simple round avatar of my sheepdog, Rufus.

### Step 1

<img class="align-right" alt="ruf-s2" src="/images/ruf-s2.png" width="237" height="237" />Here&#8217;s the original image with rounded corners, saved as a transparent PNG-24. I&#8217;ve cut the dimensions in half so it&#8217;s retina ready. Using Photoshop CS6&#8217;s [save for web][1] tool, The final total comes to `357KB`. I&#8217;ll bet we can do better.

<h3 style="clear: both;">
  <strong>Step 2</strong>
</h3>

<img class="align-right" alt="ruf-s3" src="/images/ruf-s31.jpg" width="237" height="237" />Save your original image (without the mask) as a compressed JPG—I&#8217;ve named mine rufus-compressed.jpg. Here it is, now an entirely reasonable `30KB`.

<h3 style="clear: both;">
  Step 3
</h3>

<img class="align-right" alt="ruf-s4" src="/images/ruf-s4.jpg" width="237" height="237" />Here&#8217;s where it starts to get weird. In Photoshop (or whatever), start by creating a new layer. Using the marquee tool, drag out a circle that will represent the visible portion of your image. Then go to `Select > Inverse` and fill with a random color. This is what it looks like.

<h3 style="clear: both;">
  Step 4
</h3>

Leaving your original Photoshop document open, open the compressed JPG you saved in step #2.

### Step 5

Go back to your original document and select your mask layer. Then, `Select > All` and `Edit > Copy`.

### Step 6

Go to the document with your compressed JPG, create a new layer, and `Edit > Paste`. Now, `CMD + click` (or `CTRL + click` on Windows) on your mask layer&#8217;s thumbnail. This will select all the pixels on that layer.

### Step 7

Hide your mask layer and select the layer with your compressed image. If you haven&#8217;t done so already, you&#8217;ll need to unlock it by double clicking and pressing OK on the New Layer dialog that pops up. Now simply hit `Delete` to cut the mask shape out of your compressed JPG.

### Step 8

<img class="align-right size-full wp-image-397" alt="ruf-s5" src="/images/ruf-s5.png" width="237" height="237" />Now we&#8217;re left with an image that&#8217;s already undergone JPG compression and ready to be saved as a PNG. Since a lot of image information has been stripped, the PNG will necessarily be smaller than the original `357KB`. Using the save for web dialog again, save as a PNG-24. The new version comes out to `239KB`, a 33% savings.

<h3 style="clear: both;">
  It sounds like a lot of work for 33% savings…
</h3>

You&#8217;re not wrong! However, when you consider all of the images, stylesheets, scripts, and other assets that need to be loaded, 33% can make a measurable dent in your site&#8217;s load time. As Lara Swanson astutely points out, [good performance contributes to a good user experience][2]. When you&#8217;re fighting for your user, going the extra mile is always a worthwhile endeavor if you have the time and budget for it.

Let me know in the comments if you have any other fancy techniques for accomplishing good compression on JPG images with PNG transparency.

 [1]: http://saveforwebclaws.com/
 [2]: http://alistapart.com/article/improving-ux-through-front-end-performance