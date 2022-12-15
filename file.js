// Create a function with two arguments that will return an array of the first n multiples of x. Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array or list
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// multiply param one by param two and print out multiples in between 
// push numbers into an array

// a for loop is used when you want to execute code a certain amount of times
// we can't use a forEach here because you can't use a forEach on an empty array
// 
// function countBy(x, n) {
//   let z = [];
//   for (let i = x; i <= x * n ; i++) {
//       if ( i % x === 0) {
//         z.push(i)
//       }
//   }
//   return z;
// }

// console.log(countBy(2,6))
// [2,4,6,8,10,12]
// 2 <= 12
// 2 % 2 === 0 // then it can be pushed in the array
// 4 <= 12
// 4 % 2 === 0 // pushed into the array
// 6 <= 12
// 6 % 2 === 0 // pushed into the array
// 8 <= 12
// 8 % 2 === 0 // pushed into the array
// 10 <= 12
// 10 % 2 === 0 // pushed into the array
// 12 <= 12
// 12 % 2 === 0 // pushed into the array
// the condition has been met above  ^


// function countBy(x, n) {
//   let z = [];
//   for (let i = 2; 4 <= 2 * 6 ; i++) {
//       if ( 4 % 2 === 0) {
//         z.push(i)
//       }
//   }
//   return z;
// }

// function countBy(x, n) {
//   let z = [];
//   for (let i = 2; 6 <= 2 * 6 ; i++) {
//       if ( 6 % 2 === 0) {
//         z.push(i)
//       }
//   }
//   return z;
// }

// SELECT newborns.mother_name, midwives.first_name FROM newborns JOIN midwives ON newborns.id = midwives.id 

// I want the ID of the baby, the midwive assigned to the baby, and the years of experience for the baby

// SELECT FROM JOIN ON =
// SELECT newborns.id, midwives.first_name, midwives.years_experience FROM newborns JOIN midwives ON newborns.id = midwives.id 

// let numbers = [14,3,13,24,25]
// sum = 0

// for (let i = 0; i < 4; i++) {
//   console.log(numbers[i])
// }

// write a for loop that iterates from 0-50 and logs the numbers in the console

// for (let i = 0; i <=50; i++) {
//   console.log(i)
// }

// write a for loop that iterates from 1-20 and logs out whether each number in the range is even or odd
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`)
//   } else {
//     console.log(`${i} is odd`)
//   }
// }



// Our input data
const voteArr = ['yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no']

// voteTallyDot takes in an array
function voteTallyDot(arr) {
  // Create an empty object where we will accumulate votes tallies.
  // Assign this object to a constant named tally
  const tally = {}
  // Iterate through the array passed into the function
  for (let i = 0; i < arr.length; i++) {
    // On each iteration, assign the value held at position i in the arr to vote
    const vote = arr[i]
    if (vote === 'yes') {
      // if the vote is yes
      // check to see if a yes key is defined on the tally object
      if (tally.yes) {
        // if it is increment its value by 1
        tally.yes = tally.yes + 1
      } else {
        // if it is not define the key and give it a value of 1
        tally.yes = 1
      }
    } else if (vote === 'no') {
      // if the vote is no
      // check to see if a no key is defined on the tally object
      if (tally.no) {
        // if it is, increment its value by 1
        tally.no = tally.no + 1
      } else {
        // if it is not, define the key and give it a value of 1
        tally.no = 1
      }
    }
  }
  // return tally after we have iterated over the array that was passed in
  return tally
}

// Call and log the return value of the voteTallyDot function
// console.log(voteTallyDot(voteArr))



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


// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  // I need the 0 index of the string
   let age = parseInt(inputString[0])
   return age
 }

function calculateSum(arr3, arr4) {
  let results = [];
  for (let i = 0; i < arr3.length; i++) {
    results.push(arr3[i] + arr4[i])
  }
  return results;
  }
  