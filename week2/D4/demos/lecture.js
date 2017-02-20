// Scope
var a = 'I am A';
console.log("Round 0");
console.log("A: " + a + " B: " + b + "C: " + c);
function outerest(){
  var b = 'I am B';
  console.log("Round 1");
  console.log("A: " + a + " B: " + b + "C: " + c);
  function outer(){
    var c = 'i am C';
    console.log("Round 2");
    console.log("A: " + a + " B: " + b + "C: " + c);
    function inner(){
      var a = "I am the new A";
      console.log("Round 3");
      console.log("A: " + a + " B: " + b + "C: " + c);
      function innerest(){
        console.log("Round 4");
        console.log("A: " + a + " B: " + b + "C: " + c);
        var b = 'I am new B';
        console.log("Round 5");
        console.log("A: " + a + " B: " + b + "C: " + c);

      }
    }
    console.log("Round 6");
    console.log("A: " + a + " B: " + b + "C: " + c);
  }
  console.log("Round 7");
  console.log("A: " + a + " B: " + b + "C: " + c);
}
console.log("Round 8");
console.log("A: " + a + " B: " + b + "C: " + c);


// PbV v. PbR
var stringy = 'I am a string';
var arrray = [1,2,3,4,5];

function changer(){

}


// DOM manipulation
