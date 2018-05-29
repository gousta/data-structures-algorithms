function sortBubble(arr) {
  const total = arr.length;

  for(let i = 0; i < total; i++) {
    console.log('i  '+i, '=', arr[i]);
  
    for(let x = 0; x < total - i - 1; x++) {
      console.log('  ', x, '=', arr[x]);
  
      console.log('  ', arr[x], '>', arr[x+1], arr[x] > arr[x+1]);
      if(arr[x] > arr[x+1]) {
        var tmp = arr[x];
        arr[x] = arr[x+1]; 
        arr[x+1] = tmp;
      }
  
    }
    
    console.log("");
  }

  return arr;
}

console.log(sortBubble([3,1,2]));