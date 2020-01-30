function getDegit(num, index) {
  let degit = Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
  return degit;
}

// function degitCounter(num) { // digit counter bad performance
//   let cnt = 0;
//   if (num === 0) return 1;
//   while (num >= 1) {
//     num = Math.floor(num / 10);
//     cnt++;
//   }
//   return cnt;
// }

//Helper function for mostDegit
function degitCounter(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to know number of iteratons (N)
function mostDigit(arr) {
  let most = degitCounter(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let temp = degitCounter(arr[i]);
    if (temp > most) most = temp;
  }
  return most;
}

function radixSort(arr1) {
  let largestDigetNo = mostDigit(arr1);
  for (let k = 0; k < largestDigetNo; k++) {
    let arr2 = Array.from({ length: 10 }, () => []); // create 2d array to save sorting each itr
    for (let i = 0; i < arr1.length; i++) {
      arr2[getDegit(arr1[i], k)].push(arr1[i]);
    }
    arr1 = [].concat(...arr2); // turns 2d array into 1d array
  }
  return arr1;
}
console.log(radixSort([90, 1, 10000, 21])); //test
