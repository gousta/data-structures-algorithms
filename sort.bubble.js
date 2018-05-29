
function sortBubble(arr) {
  const total = arr.length;

  for(let i = 0; i < total; i++) {
    console.log('i', i, arr[i]);
  
    for(let j = 0; j < total - i - 1; j++) {
      console.log('j', j, arr[j]);
  
      if(arr[j] > arr[j+1]) {
        var tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
  
    }
    
  }

  return arr;
}


console.log(sortBubble(JSON.parse(process.argv[2])));