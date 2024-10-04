 // 3. Given an array of numbers, use reduce() to calculate the sum of all elements. Input: [5, 10, 15, 20] Expected Output: 50 


let arr = [5,10,15,20];
let sum = arr.reduce((acc,val)=>{
  return acc+val
})
console.log(sum)