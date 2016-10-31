
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
		<ul>
			<li>one</li>
			<li>two</li>
			<li>three</li>
		</ul>
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

####Accounting for Dynamic Content (using `.on('event','event_trigger', function(){...}`))
- Fixing our previous example...
```
<script type="text/javascript">
	$(document).ready(function(){
		$('body').on('click', 'h2', function(){
    		$('body').append('<h2>I am another header!</h2>');
		})
	});
</script>
```
- Now we're set up for any `<h2>` tags that show up at ANY POINT in the document's lifetime

####$(this) => Which One?
- `$(this)` will always answer the question of Which One?
```
<script type="text/javascript">
	$(document).ready(function(){
		$('li').click(function(){
			console.log($(this));
		})
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
