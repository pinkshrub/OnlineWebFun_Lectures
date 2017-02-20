#Web Fundamentals - Week 4
####Key Assignments
- Pacman
- Bootstrap Research

####Responsive Web Design
- We need to have responsive, limber websites
  - We need to accommodate the big screen, the mobile, the tablet

####Media Queries
- Media queries allow us to query the device trying to view our sites
```css
@media only screen and (max-width: 480px){
  /* CSS RULES FOR MOBILE */
}

@media only screen and (min-width: 481px){
  /* CSS RULES FOR TABLET */
}

@media only screen and (min-width: 1024px){
  /* CSS RULES FOR DESKTOP */
}
```
- As we scale our browser, or view from a phone/tablet, the CSS rules that pertain to that size of screen will apply!

- Note: <b>WE HAVE TO HAVE THIS IN THE `<head>`</b>
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

####Grids
- Bootstrap (Twitter), Materialize (Google), Skeleton
-
