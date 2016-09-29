//
// /* ON SCOPING */
// var iAmAGlobalVariable = 'Everyone sees me!';
//
// function tester(){
//   console.log(iAmAGlobalVariable);
//   var localVariable = 'I was created inside';
// }
//
// // console.log(localVariable);
// tester();
//
// var iAmAGlobalVariable = 'I am the original!';
//
// function tester2(){
//   iAmAGlobalVariable = 'Taking over!';
// }
//
// console.log(iAmAGlobalVariable);
// tester2();
// console.log(iAmAGlobalVariable);
//
// /* ~~~~~ SCOPING EXAMPLE WHO HAS ACCESS ~~~~~ */
// //global grandma
// var pies = 'pi';
//   // console.log('\nGRANDMAS STUFF')
//   // console.log(pies);
// // console.log(dinner);
// // console.log(toys);
//   console.log('\n\n')
//
// function parent(){
//
//   var dinner = 'Salad';
//   console.log('PARENTS STUFF')
//   // console.log(pies);
//   console.log(dinner);
//   console.log('\n\n')
//
//   function youngerSibling(){
//     var toy1 = 'Legos';
//     console.log('YOUNGER SIBLINGS STUFF')
//     console.log(toy1);
//     // console.log(toy2);
//     // console.log(dinner);
//     // console.log(pies);
//     console.log('\n\n')
//   }
//   function olderSibling(){
//     var toy2 = 'Game Console';
//     console.log('\n\nOLDER SIBLINGS STUFF')
//     console.log(toy2);
//     // console.log(dinner);
//     // console.log(pies);
//     console.log('\n\n')
//   }
//   youngerSibling();
//   olderSibling();
// }
//
// // parent();
//
// /* ~~~~~ RETURN A NUMBER ~~~~~ */
//
// function outer(){
//   var pi = 3.14
//   function inner(){
//     console.log('I am from the inner function');
//   }
//
//   return pi;
// }
//
// // var returnValue = outer();
// // console.log(returnValue);
//
// /* ~~~~~ RETURN A FUNCTION ~~~~~ */
//
// function outer(){
//   var pi = 3.14
//   function inner(){
//     console.log('I am from the inner function');
//   }
//
//   return inner;
// }
//
// var returnValue = outer();
// // console.log(returnValue);
// // returnValue();
//
// /* ~~~~~ CLOSURE IS HAVING ACCESS TO A PARENT FUNCTIONS VARIABLES ~~~~~ */
//
// function parent(){
//   var cookiesInTheJar = 50001;
//
//   function childEatsCookies(){
//     cookiesInTheJar--;
//
//     console.log(cookiesInTheJar);
//
//   }
//
//   return childEatsCookies;
// }
//
// var eatMoreCookies = parent();
// console.log(eatMoreCookies + '');
// eatMoreCookies();
// eatMoreCookies();
//
// /* ~~~~~~ ON HOISTING ~~~~~~~ */
//
// // console.log(x);
// // console.log(noSuchVariable);
//
// var x = 20;
//
// var bestFood = "cotton candy";
//
// function returnFood() {
// 	console.log(bestFood);
// 	bestFood = "elephant ears"; //try with 'var' also
// 	console.log(bestFood);
// 	return bestFood;
// }
// // returnFood()
//
// /* ~~~ HOISTING FUNCTIONS ~~~ */
//
// // sayHi();
// // hey();
//
// function sayHi(){ 			//named function *declaration*
// 	console.log('hi!');
// }
//
// var hey = function (){ 	//anonymous function *expression*
// 	console.log('hey there!')
// }

/* ~~~~ ON CALLBACKS ~~~~ */
function callbackHolder(first, last){
	first();
   console.log('then');
   last();
}
function callbackA(){
	console.log('A');
}
function callbackB(){
	console.log('B');
}

callbackHolder(callbackA, callbackB);

// setTimeout(function(){console.log('300ms has passed!');}, 300);


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

function rFactorial(number){
	if (number <= 1) {
		return 1
	}
	return number * rFactorial(number - 1)
}
// console.log(recursiveFactorial(170));

function rReverseArray(arr, index){
	if (!index) {index = 0}
	if (index > Math.floor(arr.length / 2)){
		return arr;
	}
	var temp = arr[index];
	arr[index] = arr[arr.length - 1 - index];
	arr[arr.length - 1 - index] = temp;
	rReverseArray(arr, index + 1)
	return arr;
}
console.log(rReverseArray([1,2,3,4,5,6,7]));

//fibonacci sequence: each number is the sum of the previous two numbers
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...]

function rFibonacci(num){
	if (num === 0){
		return 0;
	} else if (num < 3){
		return 1;
	} //implicit 'else'
	return rFibonacci(num - 1) + rFibonacci(num -2)
}
console.log("fibs:", rFibonacci(41));

/* ~~~~~ IIFEs  ~~~~~ */

;
(function(){
  var private = "i am only accessible from within my function's scope"
  console.log(private);
  return "blue"
})//() //immediately invoking itself
// console.log(private);
