
####More jQuery
- Events
- Callbacks
- Dynamic Content
- $(this)

####Events in jQuery
- Remember Javascript is providing the magic under the hood.
  - It includes events such as onmousedown, onkeypress, onkeydown, onmouseover, etc.
- What are events?
  - We want to be able to capture and listen for things like 'clicks', 'presses', 'typing', 'hovering', etc.
  - If we witness an event, we can fire off other bits of code
    - We state those other bits of code to fire off inside of what we call a callback

####Callbacks
```
$(document).ready(function(){
   // the .ready() is an event listener itself! and this comment is inside a callback
   console.log('hello');
})
```
- Typically callbacks are anonymous functions that get fired off based on something else calling it.  In other words, a callback is just a function that is executed by another function.
- In the case above, `.ready()` is a function and we passed into it another function!

####Dynamic Content
- At this point let's assume we have the following HTML snippet
```
<html>
	<body>
		<h1>First Header</h1>
    	<h2>Second Header</h2>
  	</body>
</html>
```
- We can add some content to this document using `.append()`
```
$('body').append('<h2>I am another header!</h2>');
```
- Let's set up a click event listener for every `<h2>` in order to do the appending. We're going to wrap this new event listener inside of a `$(document).ready()` function and pass through our code as an anonymous function like we discussed. 
```
<script type="text/javascript">
	$(document).ready(function(){
		$('h2').click(function(){
			$('body').append('<h2>I am another header!</h2>');
		})
	})
</script>
```
- <b>QUIZ</b>
	-Will 'I am another header!' get added to the code?
		-Why or Why Not?

####Accounting for Dynamic Content (using `.on('event','on_what', function(){...}`))
- Fixing our previous example...
```
<script>
$('body').on('click', 'h2', function(){
    console.log('h2 clicked');
});
</script>
```
- Now we're set up for any `<h2>` tags that show up at ANY POINT in the document's lifetime

####$(this) => Which One?
- `$(this)` will always answer the question of Which One?
```
<script>
$('li').click(function(){
  console.log($(this));
})
</script>
```

####A Word On Debugging
- Always `console.log()` to make sure jQuery is loaded
```
$(document).ready(function(){
    console.log('jquery is available!');
})
```
- `console.log()` inside your callbacks!
```
$('li').click(function(){
  console.log('li clicked');
  console.log($(this));
});
```
- `console.log()`, `console.log()`, `console.log()`!!!

#jQuery -> AJAX

##First, a step back:

 Objects

##We all know about javascript variables by this point:

		var person = "Michael"

But what if we want to store many properties of the same object?

We have a couple options.


	var person  = ["Michael", "brown", "blue", "Olalla"]


So here we can access everything just fine so long as we know the index, or we can loop through every single element to find something.

But how are other developers to know that hometown is at index [3] of this array?

	console.log(person[3]);
	-> "Olalla"

####enter the Object

```
var person = {
	"name": "Michael",
	"hair_color": "brown",
	"bicycle_color": "blue",
	"hometown": "Olalla"
}
```

Arrays are great for certain types of data - things with a fixed order, for example. But properties of a person or a customer or a car don't have fixed orders.

But with orderly key / value pairs, any value can be looked up simply by knowing the name of the key.

	console.log(person['hometown']);
	-> "Olalla"

- Arrays of Objects!

- This is just a warm-up. The real wizardry comes next!

##AJAX

- super great!

- Asynchronous Javascript And XML

- Allows you to:
	- update web pages without reloading
 	- send requests to a server after the page has loaded
	- receive responses from a server after the page has loaded
	- send data to a server in the background


- Works with your own servers as well as external APIs

- examples: autocomplete, google maps, news feeds

##API

- Application Programming Interface

- A resource meant to be used by other developers

- allows you to use data others have collected

- There are TONS of APIs out there -- if you can think of it, there's an API for it


	Advantages
	- development speed
	- cross language / cross platform
	- increase market size

##Some APIs worth checking out

Open Weather Map: http://openweathermap.org/api

GitHub API: https://developer.github.com/v3/

Google Maps Directions API: https://developers.google.com/maps/documentation/directions/

Twitter API: https://dev.twitter.com/rest/public

Flickr API: https://www.flickr.com/services/api

NASA APIs: https://api.nasa.gov

The Home of the US Government's data: https://data.gov

Pokemon API: http://pokeapi.co/media/img/1.png

Star Wars API: http://swapi.co

## AJAX returns JSON and HTML as well as XML
 - wait, what's JSON?
 	- JavaScript Object Notation
	- An example of JSON:
```
var data = {
	results: [
		{
			name: 'Rob',
			hobby: 'Coding'
		},
		{
			name: 'Jennifer',
			hobby: 'Coding'
		},
		{
			name: 'Leo',
			hobby: 'Coding'
		},
		{
			name: 'Michael',
			hobby: 'Helping Others Code'
		}
	],
	date: '09-20-2016',
	version: 0.9
}
```


http://pokeapi.co/api/v1/pokemon/1/
