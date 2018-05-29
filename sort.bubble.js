function sortBubble(arr) {
  const total = arr.length;

  for(let i = 0; i < total; i++) {
    console.log('i  '+i, '=', arr[i]);
  
    for(let x = 0; x < total - i - 1; x++) {
      console.log('  ', x, '=', arr[x]);
  
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

const props = JSON.parse(process.argv[2]);

console.log(sortBubble(props));