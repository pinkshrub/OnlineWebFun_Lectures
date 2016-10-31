#Web Fundamentals - Week 2

####Javascript fundamentals
- Variables

```javascript
var stuff = 'hello';
```

- Functions

```javascript
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
```javascript
var bool = true;
```
- Strings
```javascript
var stuff = 'hello';
```
- Numbers
```javascript
var num = 5;
var anotherNum = 6.12;
```
- Arrays
  (buckets)
```javascript
var arr = [1, 'sara', 2.12];
```
- Objects (labeled buckets, dictionary)
```javascript
var obj = {};

var objWithStuff = {
  hammers : ["It's", "Hammer", "Time"];
};

console.log(objWithStuff)
console.log(objWithStuff.hammers);
console.log(objWithStuff.hammers[0]);
```
  - Functions in objects

```javascript
var fnInObj = {
  fn : function(){
    console.log('heyo');
  }
};

//execute function in object
fnInObj.fn();
```

- If/Else
```javascript
var bool = true;

if(bool) {
  console.log('in if');
} else {
  console.log('in else');
}
```
- Loops
  - for
```javascript
var arr = [1,2,3];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
  - while

```javascript
var num = 5;
while(num > 0) {
  console.log(num);
  num = num-1;
}
```
