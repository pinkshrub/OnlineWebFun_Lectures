#Web Fundamentals - Week 2
####Javascript
- HTML is the content
- CSS is the style
- Javascript is the magic
  - Precursor: <b>Javascript Olympics</b>

####jQuery!
- What is jQuery?
- Where does it fit in?
- What's cool about it?

####The What
- jQuery is just a library of day-to-day Javascript commands that you can use to manipulate the DOM
- The DOM?
  - The Document Object Model
```
console.dir(document);
```
- The DOM is just the document itself and all the elements that make it up.
- We are going to use jQuery to make our webpages more interactive and fun.

####The How
- Vanilla Javascript can pinpoint elements in the DOM, allowing us to manipulate them in various ways:
  - Change styling
  - Hide/Remove
  - Listen for Mouse or Keyboard events
```
//vanilla javascript
document.getElementById('title').innerHTML = "Wowsers!" // => Grabs an HTML element with id="title" and then sets its inner HTML to "WHOA NELLY"
```
- Here's the jQuery equivalent
```
$('#title').html("WHOA NELLY");
```

####Including jQuery
- Use either a CDN (Content Delivery Network) or get your own copy
```
//CDN
<script   src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
```
- Minified version??

####The $ and Selectors
- By including jQuery in our scripts, we can use the `$` to find elements for us
- Selectors
  - Just like CSS!
```
$('#title')
$('.coding')
$('p')
```
- <b>Quiz</b> What are each of the selectors above grabbing?

####jQuery Documentation
