// Given an unsorted array of numbers, find the maximum difference
// between the successive elements in its sorted form
// Linear time (and linear space)!

// [ 1,3,4,3, 0, 3, 3, 3, 4 ] =>
// [1,1,0,5,2]

// n = arr.length
// linear - O(n)
// quadratic = O(n^2)

// Runtime complexity is n*log(n)
const maxGap = (arr) => {
  arr.sort((a, b) => a - b); // O(nlog(n)) --- comparison sort
  // O(n+k) counting sort, k = max - min
  let maxDiff = 0;
  if (arr.length < 2) {
    return 0;
  }

  // let prev = arr[0];
  // return arr.reduce((maxDiff, el, index) => {
  //   let diff = el - prev;
  //   prev = el;
  //   return Math.max(maxDiff, diff);
  // }, 0);

  for (let i = 1; i < arr.length; i++) {
    // O(n)
    let diff = arr[i] - arr[i - 1];
    maxDiff = Math.max(maxDiff, diff);
  }
  return maxDiff;
};

if (maxGap([20, 1, 17, 3, 16, 2, 7]) !== 9) {
  throw new Error();
} else {
  console.log(maxGap([20, 1, 17, 3, 16, 2, 7]));
}
if (maxGap([-20, 1, 17, -3, 16, 2, 7]) !== 17) {
  throw new Error();
}
if (maxGap([20, 1.1, 17, 3.5, -16, 2, 7]) !== 17.1) {
  throw new Error();
}
if (maxGap([20]) !== 0) {
  throw new Error();
}
if (maxGap([]) !== 0) {
  throw new Error();
}
