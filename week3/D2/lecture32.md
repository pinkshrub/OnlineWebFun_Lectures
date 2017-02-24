### JQuery, the rillniss

#### Lecture Outline

###### Admin
- Yellow Belts...Only a few ungraded!
- Do them and correct them up so you get next code

###### Recap + Context
- Yesterday we built JQuery! sorta...
- Comfortable with a few ideas:
  - Order content loads
    - Use of $(document).ready(callback)
  - Understanding JQuery syntax
    - $(element) returns an object keyed to 'element'
    - has methods available to it!
    - #callbacklife
  - Events woo!
    - EventHandlers are _attached_ to elements

###### JQuery
- Basics
  - "20%" Tags
    - Effects (functions to do some cool animation effects)
      - .hide()
      - .show()
      - .toggle()
      - .slideDown()
      - .slideToggle()
      - .slideUp()
      - .fadeOut()
      - .fadeIn()
    CSS (adding or removing a class for any HTML element/DOM)
      - .addClass()
      - .removeClass()
      - .css()
    - Manipulation (retrieving or setting value or text in any HTML element)
      - .after()
      - .append()
      - .prepend()
      - .attr()
      - .before()
      - .html()
      - .text()
      - .val()
    - Events (functions to handle an event)
      - .click()
      - .on()
      - .live() - deprecated (JQuery 1.7)
      - .hover()

    - Any questions?

- This
  - a reference to the element that triggered the event
  - analagous to this in JS, which refers to object that invoked call
- Traversal
  - Analagous to CSS Parent/Child/Sibling relationships
- Dynamic Content
  - well, event listeners get put on stuff when .ready triggers. How do we touch dynamic content?
  - .on changes how eventlisteners are 'attached'
    - it checks events in areas of the page and then checks if it needs have a specific element react to something
- Forms
  - Request/Response Cycle
  - Forms do this!
    - Form leads to blank page because nothing was returned to browser to render!
    - So stop that!
    - Try to hint at AJAX here
