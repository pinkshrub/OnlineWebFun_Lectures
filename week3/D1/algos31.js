// 0: Hi! Happy Yellowbelting?!?! Also, ready for some whiteboarding?
// 1: Context!
//   - pre:  Chapter 1 - Basic 13
//   - now:  Chapter 2 - A continuation of fundamentals
//   - next: Chapter 3
// 2: Learns & Show'n'Tell
//   - Review:
//     - min,max,mean

function m3(array) {
  var min = max = array[0];
  var length = l = array.length;
  var sum = 0;
  for (var i = 0; i < l; i++) {
    min = array[i] < min ? array[i] : min;
    max = array[i] > max ? array[i] : max;
    sum += array[i];
  }
  console.log("Minimum: ", min);
  console.log("Maximum: ", max);
  console.log("Mean: ", sum/l);
}

// m3([1,2,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9,8,9,10]);
//     - Star Art (as an object)

function stARTbuilder(width) {
  width = width || 75;
  return {
    width: width,
    fill: ' ',

    // prints left aligned NUM of asterisks
    left: function(num){
      var result = '';
      while (result.length < num){
        result += '*';
      }
      console.log(result);
      return result;
    },

    // prints center aligned NUM of asterisks
    center: function(num) {
      console.log('center');
      var result = '';
      var numspaces = 75 - Math(num/2);
      for (var i = 0; i < numspaces; i++) {
        result += ' ';
      }
      while (result.length < 75){
        result += '*';
      }
      console.log(result);
      return result;
    },

    // prints right aligned NUM of asterisks
    right: function(num) {
      var result = '';
      var numspaces = Math.ceil((width - num)/2);
      for (var i = 0; i < numspaces; i++) {
        result += ' ';
      }
      while (num){
        result += '*';
        num--;
      }
      while (result.length < width) {
        result += ' ';
      }
      console.log(result);
      return result;
    }
  }
};


console.log(stARTbuilder(15).right(5));
//   - Modulo
//     - Remainder

// 3: Stuff to Do!
//   - Coin Change

//   - Messy Math
//   - Clock Hand Angles
//   - IsPrime?

// IsPrime?
// Return whether a given interger is a prime number, (divisible by 1 and itself only)

// function isPrime(number) {
//   // if num is < 4 its prime...
//   for (var divisor = 2; divisor < number; divisor++) {
//     if (number % divisor === 0) {
//       return false;
//     }
//   }
//   return true;
// }
