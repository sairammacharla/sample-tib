var arr =[10,8,6,7,3,9,5,2,1,4];
var arr_length=arr.length;
var temp;
for( var i = 0; i < arr_length; i++){
	for(j=i+1; j< arr_length;j++){
		if(arr[i] > arr[j]){
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}
console.log(arr);