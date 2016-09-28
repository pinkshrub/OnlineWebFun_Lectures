/* ON SCOPING */
var iAmAGlobalVariable = 'Everyone sees me!';

function tester(){
  console.log(iAmAGlobalVariable);
  var localVariable = 'I was created inside';
}

// console.log(localVariable);
tester();

var iAmAGlobalVariable = 'I am the original!';

function tester2(){
  iAmAGlobalVariable = 'Taking over!';
}

console.log(iAmAGlobalVariable);
tester2();
console.log(iAmAGlobalVariable);

/* ~~~~~ SCOPING EXAMPLE WHO HAS ACCESS ~~~~~ */
//global grandma
var pies = 'pi';
  console.log('\nGRANDMAS STUFF')
  console.log(pies);
// console.log(dinner);
// console.log(toys);
  console.log('\n\n')

function parent(){

  var dinner = 'Salad';
  console.log('PARENTS STUFF')
  // console.log(pies);
  console.log(dinner);
  console.log('\n\n')

  function youngerSibling(){
    var toy1 = 'Legos';
    console.log('YOUNGER SIBLINGS STUFF')
    console.log(toy1);
    // console.log(toy2);
    // console.log(dinner);
    // console.log(pies);
    console.log('\n\n')
  }
  function olderSibling(){
    var toy2 = 'Game Console';
    console.log('\n\nOLDER SIBLINGS STUFF')
    console.log(toy2);
    // console.log(dinner);
    // console.log(pies);
    console.log('\n\n')
  }
  youngerSibling();
  olderSibling();
}

parent();

/* ~~~~~ RETURN A NUMBER ~~~~~ */

function outer(){
  var pi = 3.14
  function inner(){
    console.log('I am from the inner function');
  }

  return pi;
}

var returnValue = outer();
console.log(returnValue);

/* ~~~~~ RETURN A FUNCTION ~~~~~ */

function outer(){
  var pi = 3.14
  function inner(){
    console.log('I am from the inner function');
  }

  return inner;
}

var returnValue = outer();
console.log(returnValue);
returnValue();

/* ~~~~~ CLOSURE IS HAVING ACCESS TO A PARENT FUNCTIONS VARIABLES ~~~~~ */

function parent(){
  var cookiesInTheJar = 50001;

  function childEatsCookies(){
    cookiesInTheJar--;

    console.log(cookiesInTheJar);

  }

  return childEatsCookies;
}

var eatMoreCookies = parent();
console.log(eatMoreCookies + '');
eatMoreCookies();
eatMoreCookies();

console.log(x);
console.log(noSuchVariable);

var x = 20;

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
})() //immediately invoking itself
// console.log(private);
