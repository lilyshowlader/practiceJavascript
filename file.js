animals = ['cat','dog', 'cat', 'cat', 'dog']
            // i      i      i      i      i

// create a function that calculates the count of each animal and places it into an object

function calculateAnimals(animals) {
  // creating an empty object to hold my count
  let count = {}
  // loop through the array
  for (let i = 0; i < animals.length; i++) {
    let value = animals[i]
  // storing all the elements in the animals array into a variable called value  
    if (value === 'cat') {
      // I want to create a key for every new element in the array
      // if the key already exists, I want to increment the vote by one
      if (count.cat) {
        count.cat = count.cat + 1
      } else {
        count.cat = 1
      }
    } else if (value === 'dog') {
      if (count.dog) {
        count.dog = count.dog + 1
      } else {
        count.dog = 1
      }
    }
  } return count;
}

console.log(calculateAnimals(animals))

// this function will return an object with the count of each character within a string 
function charCount(string) {
  let count = {}
  // loop through the string. 
  for (let i = 0; i < string.length; i++) {
    // store the value of i in each iteration to a variable
    let value = string[i]
    if (count[value]) {
      count[value]++
    } else {
      count[value] = 1
    }
  } return count 


}




// Prompt:

// Write a function called addOne that takes a single number as an argument and returns that number plus 1.

// Examples:

// addOne(1) //=> 2
// addOne(-5) //=> -4

function addOne (number) {
  // takes an number
  // returns that number plus one 
  let total = number + 1
  return total 
}

// console.log(addOne(2))

// Prompt:

// - Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
// - If either argument is not a number, return the value of NaN.

// Examples:

// addTwoNumbers(5, 10) //=> 15
// addTwoNumbers(10, -2) //=> 8
// addTwoNumbers(0, 0) //=> 0
// addTwoNumbers('Hello', 5) //=> NaN

function addTwoNumbers(numberOne, numberTwo) {
  let total = numberOne + numberTwo
  if (typeof numberOne === 'number' && typeof numberTwo === 'number') {
    return numberOne + numberTwo
  } else {
    return NaN
  }
  // accepts two numbers
  // returns the sum of those two numbers
  // if either argument is not a number, return NaN
  // you can figure out if something is not a number by using typeof 


}

// Prompt:

// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).

// Examples:

// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0

function sumNumbers(arrayOfNumbers) {
  let value = 0
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    value = value + arrayOfNumbers[i]
  }
  // accepts a single array of numbers
  // returns the sum of ALL numbers in the array
  // for loop
  // need to store the value in a variable
  return value 
}