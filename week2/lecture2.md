#Web Fundamentals - Week 2

####Javascript fundamentals
- Variables
  ```js
    var stuff = 'hello';
  ```
- Functions
  ```js
  var fn = function(){
    console.log('hey');
  }
  function fn(){
    console.log('hey');
  }

  //execute function
  fn();
  ```
- Booleans
  ```js
    var bool = true;
  ```
- Strings
  ```js
    var stuff = 'hello';
  ```
- Numbers
  ```js
    var num = 5;
    var anotherNum = 6.12;
  ```
- Arrays
  (buckets)
  ```js
    var arr = [1, 'sara', 2.12];
  ```
- Objects (labeled buckets, dictionary)
  ```js
    var obj = {};

    var objWithStuff = {
      hammers : ["It's", "Hammer", "Time"];
    };

    console.log(objWithStuff)
    console.log(objWithStuff.hammers);
    console.log(objWithStuff.hammers[0]);
  ```
  - Functions in objects

  ```js
    var fnInObj = {
      fn : function(){
        console.log('heyo');
      }
    };

    //execute function in object
    fnInObj.fn();
  ```
- If/Else
  ```js
    var bool = true;

    if(bool) {
      console.log('in if');
    } else {
      console.log('in else');
    }
  ```
- Loops
  - for
  ```js
    var arr = [1,2,3];
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  ```
  - while

    ```js
    var num = 5;
    while(num > 0) {
      console.log(num);
      num = num-1;
    }
    ```

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
  - What does that mean? Everything is an object. At the highest level is an object, called document. All the tags inside are converted into objects, and placed hierarchically into the document object.
  - The document object also comes with utility functions. One of which is grabbing an element by it's id.

```
console.dir(document);
```
- The DOM is just the document itself and all the elements that make it up.
- We are going to use jQuery to make our webpages more interactive and fun.

####The How
- Vanilla Javascript can pinpoint elements in the DOM, allowing us to manipulate them in various ways:
  - Change styling
  - Hide/Remove elements
  - Listen for Mouse or Keyboard events (event listeners)
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
