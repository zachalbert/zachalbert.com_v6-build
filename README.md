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

## The Orrery

At the top of my website is an [orrery](http://en.wikipedia.org/wiki/Orrery), a long-held fascination of mine. I built it using data from nasa so that the orbital periods for the planets are correct relative to each other. I included some moons (but not all, for performance reasons). The moons are orbiting correctly relative to each other, but are on a different time scale than planetary orbits. If I used the same time scale, most moons would spin so fast they wouldn't be visible or would melt your computer.

***include link to spreadsheet data***

## Development

* To start the server and start gulp watching stuff, run `npm start`
* Every 3 months or 3,000 miles, run `npm update`

## Deploy

To deploy, run `gulp deploy`

## Stuff used

* Responsive flexbox grid: http://flexboxgrid.com/