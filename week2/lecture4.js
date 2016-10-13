var $ = function(identifier) {
  console.log(identifier);

  var obj = {
    html : function(){
      console.log('hi!');
      console.log('im a function in the obj');
    }
  }

  return obj;
}

$('h1');
