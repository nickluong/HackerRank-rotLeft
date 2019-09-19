// Complete the rotLeft function below.
function rotLeft(a, d) {
  // subarray from d to length +
  startSubArray = a.slice(d, a.length)

  // subarray from 0 to d-1
  endSubArray = a.slice(0, d)

  array = [...startSubArray, ...endSubArray]

  return array

}

// console.log(rotLeft([1, 2, 3, 4, 5], 4))
// => [5, 1, 2, 3, 4]