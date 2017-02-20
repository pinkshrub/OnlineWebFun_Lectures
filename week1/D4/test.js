function swap(arr) {
	var temp = arr[0];
	arr[0] = arr[arr.length - 1];
	arr[arr.length - 1] = temp;
	return arr;
}
var array = [1,2,3,4,5,6];
console.log(swap(array));
console.log('what!!!')
