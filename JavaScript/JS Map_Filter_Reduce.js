// JS array method .map functionality 

const myArr = [1, 2, 3, 4]

//Map returns a NEW array with the results of the function after it has run for each of the elements in the given array as in inpot for the map function
const multiply = myArr.map((num, i, arr) => { // we dont use i or arr here
  return num * 3;
})
console.log(multiply); // [3, 6, 9, 12]



// FILTER runs a condition for each element of the given array and pushes to new array when result in True and leaves the value out when the function returns false.

const moreThanTwo = myArr.filter((num) => {
  return num > 2;
})
console.log(moreThanTwo); // [3, 4]


// REDUCE, reduces the input from the array to a single value.
// reduce takes arguments; accumulator = sum of the previous computed value -> current value = the current index falue. -> the index if needed. -> possibly an array. 
// most commonly and here we only use the acc and curr.
// We also set the initial value to 0 after the callback function brackets.
const sum = myArr.reduce((acc, curr , i, arr) => {
  return acc + curr;
}, 0)
console.log(sum); // sums to 10



// CREATING POLYFILL OF MAP
// Addine a new prototype as an array method that has the same functionality as the available .map function. this is jus to show how this is defined and that alternative functionality can be created where/when needed.
Array.prototype.myMap = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  
  return map;
}