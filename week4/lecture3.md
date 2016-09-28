#### Javascript Advanced Concepts

#### Scoping

#### Closures

#### Hoisting
 ```
 console.log(x);
 console.log(noSuchVariable);
 var x = 20;
 ```
 - In "normal" languages (including Python), the program breaks if you try to call upon a variable that isn't yet set.
 - Oh no not so with Javascript!
 - JS 'hoists' all variable declarations to the very very top of the file.
 ```
 var x; //implicitly and invisibly occurs

 console.log(x);
 console.log(noSuchVariable);
 var x = 20;
 ```
#### Callbacks

#### Recursion

#### Immediate Functions

#### Functions in Objects
