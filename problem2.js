// Write a custom higher-order function called forEach Custom() that behaves like forEach(). It should take an array and a callback function and apply the callback to each element of the array.

// Example
// function forEachCustom(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }



function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

let number = [1,2,3,4,5];
forEachCustom(number, (num,index,arr)=>{
    console.log(`number ${num}, index ${index},arr${arr}`)
})




