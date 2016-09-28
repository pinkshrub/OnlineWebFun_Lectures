/*ON HOISTING*/

// console.log(x);
// console.log(noSuchVariable);

var x = 20;

/*ON RECURSION*/

function infiniteLoop(){ //poor computer!
	infiniteLoop(); // the function calls itself
}
// infiniteLoop();

function brokenLoop(num){ //how many times will this run?
	console.log(num);
	if (num < 1) { //break case
		console.log('broke out!');
		return; //this return pops us out of our current function call
	}
	brokenLoop(num - 1); // the function calls itself
}

// brokenLoop(3);

(function(){
  var private = "i am only accessible from within my function's scope"
  console.log(private);
  return "blue"
})() //immediately invoking itself
// console.log(private);
