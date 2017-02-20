//shiftArrayValsLeft
//start: [3,5,2,8]
//end: [5,2,8,0]

function shiftArrayValsLeft(arr){
	for(var i = 1; i < arr.length; i++){
		arr[i-1] = arr[i];
	}
	arr[arr.length-1] = 0;

	return arr;
}

var results = shiftArrayValsLeft([3,5,2,8]);
console.log('this is the results from the function',results);
