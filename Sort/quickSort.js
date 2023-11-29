const log = console.log;

const newSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    //log(arr);
  }
  return arr;
}

const partitioning = (arr, start, end) => {
  // 최종적으로 start++이 되고 넘아갈거라 반드시 floor로 처리 
  const pidx = Math.floor((start + end)/2);

  while(start <= end) {
    while(arr[start] < arr[pidx]) {
      start++;
    }
    
    while(arr[end] > arr[pidx]) {
      end--;
    }
    
    if (start <= end) { 
      // swap
      [arr[start], arr[end]] = [arr[end], arr[start]];
      // 최종적으로 넘겨줄 pidx값이므로 stert 와 end가 같은 상황에서 + 시켜 줘야 함
      start++; 
      end--;
    }
  }

  return start;
};

const quickSort = (arr, start = 0, end = arr.length-1) => {
  const pidx = partitioning(arr, start, end);

  if(start < pidx - 1) {
    quickSort(arr, start, pidx - 1);
  }

  if (end > pidx) {
    quickSort(arr, pidx, end);
  }

  return arr;
};

const arr1 = [3,6,7,5,3,6,2,9,1,5,33,-12,0,-122,-Infinity, 125, 33, 55, 77];
const arr2 = [3,6,7,5,3,6,2,9,1,5,33,-12,0,-122,-Infinity, 125, 33, 55, 77];
const arr3 = [3,6,7,5,3,6,2,9,1,5,33,-12,0,-122,-Infinity, 125, 33, 55, 77];

console.time('justSort');
log(arr3.sort((a, b) => a - b));
console.timeEnd('justSort');

console.time('newSort');
log(newSort(arr2));
console.timeEnd('newSort');

console.time('quickSort');
log(quickSort(arr1));
console.timeEnd('quickSort');
