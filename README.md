OverlayDirective
================

Angular directive to add a simple overlay

Add the item-overlay directive as a child of any element to get the overlay displaying.

The parent element must have position set to relative.

The overlay can be added as an element or an attribute:

<item-overlay></item-overlay>

<div item-overlay></div item-overlay>

The color and opacity can be customised with additional attributes:

<item-overlay color='#5A8F29' opacity='0.8'></item-overlay>

<div item-overla color='#5A8F29' opacity='0.8'y></div item-overlay>

If you want anything additional to be added to the overlay you can add a template file:

templates/overlay.html

and customise it in however you like.

