# ZacHalbert.com (v6)

My personal site.

## To-do

* Investigate the foundation flexbox grid
* For the grid, think about this:
** Perhaps, elements like side nav, p elements, etc should all get grid sizes in the stylesheet, rather than in the markup. This will allow full width things like images.
* Site footer
* Portfolio list page
* Portfolio detail view
* Figure out image sizing
* Responsive tuning on the nav & header
* Responsive tuning on the main column view
* Get better icons on the orrry
* Write a better thanks page
* Change the orrry to more of a general experiment / project showcase area, easily swappable
* Make the pause button toggle to a play button
* Get excerpts to stop ignoring line breaks (currently only pulls 1st paragraph)
* Complete metadata tag (implemention)[http://moz.com/blog/meta-data-templates-123]
* Change contact to be more of a newsletter signup / contact form

## The Orrery

(At the top of my website)[http://www.zachalbert.com/#top] is an [orrery](http://en.wikipedia.org/wiki/Orrery). If you want to read more about what went into the project, you can (check out the blog post)[http://www.zachalbert.com/orrery]. Additionally, here's the (nasa.gov data)[http://nssdc.gsfc.nasa.gov/planetary/factsheet/] the code is based on.

Unfortunately the code to generate the orrery is currently coupled fairly tightly with my website itself, but I plan on moving it to its own repo at some point in the future. The orrery is constructed using SASS mixins, mostly, though this can be done far more efficiently a number of different ways, I'm sure. You can play around with it locally by cloning this repo and running `npm start`.

* (Main orrery mixins & SASS)[https://github.com/zachalbert/zachalbert.com_v6/blob/master/_scss/_orrry.scss]
* (Include for the orrery markup)[https://github.com/zachalbert/zachalbert.com_v6/blob/master/_includes/orrry.html]

## Development

* Run `npm start` — will install missing dependencies, run a local server, and begin a gulp watch task with live reload.

## Deploy

To deploy, run `gulp deploy`

## Stuff used

* Responsive flexbox grid: http://flexboxgrid.com/