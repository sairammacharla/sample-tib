var arr =[10,8,6,7,3,9,5,2,1,4];
console.log(sortArray(arr));
function sortArray(arr){
	for (var i = 1; i < arr.length; i++) {
 
	      if (arr[i] < arr[i - 1]) {
	        arr[i] = arr[i] + arr[i - 1];
	        arr[i - 1] = arr[i] - arr[i - 1];
	        arr[i] = arr[i] - arr[i - 1];
	        i = 0;
	      }
	
	}
	return arr;
}
