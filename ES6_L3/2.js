// 2. Given an array of numbers, use filter() to return an array of only even numbers. Input: [1, 2, 3, 4, 5, 6] Expected Output: [2, 4, 6]

let arr = [1,2,3,4,5,6];
let EvenNum = arr.filter((num)=>{
    return num%2==0
})
console.log(EvenNum)