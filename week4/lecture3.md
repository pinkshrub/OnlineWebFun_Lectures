#### Javascript Advanced Concepts

#### Scoping

#### Closures

#### Functions in Objects
 - Function Declarations vs Function Expressions
 - Declarations are the "normal" way we're used to seeing functions defined:
 ```js
 function someFunc(){
	 //code goes here
 }

 //invoked by:
 someFunc();
 ```
 - But functions can also be created via Expression
  - by assigning a function to a variable
  - or assigning a function as a property of an object

 ```js
var thingy = function(){
	console.log("this is part of a function expression")
}
//invoked by:
thingy();

var myObj = {
	myFunction : function(){
		console.log("this is my function which lives inside an object!")
	}
}
//invoked by:
myObj.myFunction(); //think about jQuery's dot methods!
 ```

#### Hoisting
 ```js
 console.log(x);
 console.log(noSuchVariable);
 var x = 20;
 ```
 - In "normal" languages (including Python), the program breaks if you try to call upon a variable that isn't yet set.
 - Oh no not so with Javascript!
 - JS 'hoists' all variable declarations to the very very top of the file.
 ```js
 var x; 	//implicitly and invisibly occurs

 console.log(x);
 console.log(noSuchVariable);
 var x = 20;
 ```
  - This can be tricky, especially when dealing with functions!

 ```js
 var bestFood = "cotton candy";

 function returnFood() {
	 console.log(bestFood);
	 bestFood = "elephant ears";
	 console.log(bestFood);
	 return variable;
 }
 ```
  - Functions are 'hoisted' as well!\*

 ```js
 sayHi();
 hey();

 function sayHi(){ 			//named function *declaration*
	 console.log('hi!');
 }

 var hey = function (){ 	//anonymous function *expression*
	 console.log('hey there!')
 }


 ```
 - \*only if they are created by declaration, **not** if they are created by function expression

#### Callbacks

#### Recursion
 - Sometimes, functions call other functions. Other times, functions call themselves!
 - When a function calls itself, that is _recursion_.
 - Doesn't that lead to a infinite loop? Yes.
 - Unless:
  - Each function call takes you closer to your goal
  - That goal is set up as a 'break case', which **breaks** you out of the loop

 ```js
 function infiniteLoop(){ 			//poor computer!
	 infiniteLoop(); 					// the function calls itself
 }
 function brokenLoop(num){ 		//how many times will this run?
	 console.log(num);
	 if (num < 1) { //break case
		 console.log('broke out!');
		 return; 						//this return pops us out of our current function call
	 }
	 brokenLoop(num - 1); 			// the function calls itself
 }

 brokenLoop(3);
 ```  


#### Immediate Functions
 - Immediately Invoked Function Expression ("iffy")
 - Offers the security and privacy of scoping without taking up a name
 - Putting the whole function inside (parens) makes it an expression the same way assigning it to a variable does
 - Invoking that function right away with the () means it doesn't wait to get called by anything else; it hits the gates running.

 ```js
 (function(){
	var private = "i am only accessible from within my function's scope"
	console.log(private);
 })();
 console.log(private);

 ```
