let arr = [31, 10, 49, 23, 8, 36];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  if(arr[i] > arr[i+1]) {
    var tmp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = tmp;
  }
}

console.log(arr);