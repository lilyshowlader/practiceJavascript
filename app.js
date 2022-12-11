const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];


for (let key of inventors) {
  // console.log(key.first, key.last)
}

let plants = ['monstera', 'snake', 'zz', 'daisy']

for (let i = 0; i < plants.length; i++) {
  // console.log('zz')
}

console.log('Hello World')

function helloWorld() {
  console.log('hello word!')
}

helloWorld()

let object = {
  name: 'lily'
}

object.last = 'Howlader'

console.log(object)
// FILTER METHOD
// .filter() select the elements from a source array and returns in new array
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.


// let filteredArray = inventors.filter(function(inventor) {
//   const birthYear = inventor.year
//   return birthYear >= 1500 & birthYear <= 1599
// })

let filteredArray = inventors.filter((inventor => {
  const birthYear = inventor.year
  return birthYear >= 1500 & birthYear <= 1599
}))

// console.log(filteredArray)

// 2. Filter the array of inventors into a new array containing only the inventors born in the 1600's

let newFilteredArray = inventors.filter(inventor => {
  return inventor.year >= 1600 & inventor.year <= 1699
})

// console.log(newFilteredArray)

let users = [
  {name: 'lily', age: 28, likes: 'cats'},
  {name: 'eric', age: 33, likes: 'dogs'},
  {name: 'sarah', age: 31, likes: 'dogs'},
  {name: 'mom', age: 53, likes: 'cats'},
  {name: 'dog', age: 61, likes: 'dogs'},
  {name: 'brother', age: 31, likes: 'cats'},

]

let thirdFilteredArray = users.filter(user => {
  return user.likes === 'cats'
})

// console.log(thirdFilteredArray)

// filtering for the people who are over 50 
let fourthFilteredArray = users.filter(user => {
  return user.age > 50
})

// console.log(fourthFilteredArray)

// filtering for the people who 
let fifthFilteredArray = users.filter(user => {
  return user.age < 50 
})

// console.log(fifthFilteredArray)

let dresses = [
  {color: 'pink', style: 'short', season: 'fall'},
  {color: 'pink', style: 'long', season: 'summer'},
  {color: 'red', style: 'long', season: 'fall'},
  {color: 'pink', style: 'long', season: 'summer'},
  {color: 'orange', style: 'short', season: 'spring'}
]

// filter for pink dresses
let pinkDresses = dresses.filter(dress => {
  return dress.color === 'pink'
})

// console.log(pinkDresses)
// filter for short dress

let shortDresses = dresses.filter(dress => {
  return dress.style === 'short'
})

// console.log(shortDresses)
// filter for fall dresses
let fallDresses = dresses.filter(dress => {
  return dress.season === 'fall'
})


let array = ['hello', 'hi', 'who']

function reverseArray(array) {
  let newArray = array.reverse()
  return newArray
}

// console.log(reverseArray(array))


let arr3   = [4, 6, 7];
let arr4	= [8, 1, 9];
// Example output: 
// [12, 7, 16]

// *********** YOUR CODE HERE **********************

function calculateSum(arr3, arr4) {
let results = [];
for (let i = 0; i < arr3.length; i++) {
  results.push(arr3[i] + arr4[i])
}
return results;
}

// console.log(calculateSum(arr3, arr4))


// Let’s say we want to get the newborn’s id, the name of their mother, and also the name of the midwife who was helping during labor


// SQL PLAN

// Write out the syntax for a SQL JOIN
// SELECT newborns.id, newborns.mother_name, midwives.first_name FROM midwives JOIN newborns ON midwives.id = newborns.midwife_id = WHERE
// Read the question and write out some key words that stick out to me
// newborns id, mother name, midwife 
// Examine the tables
// Figure out what columns the answer requires
// newbornsid, mother name, midwife
// Figure out if I need to do a join or not
// newborns.midwife_id, midwives.id
// Figure out if I need a specific condition 

// name, population
// SELECT name, population FROM world WHERE name = 'Bahrain', 'Swaziland', 'Timor -Leste'

// ORDER ID CUSTOMER NAME ORDER DATE

// SELECT Orders.OrderID, Customers.CustomerName Orders.OrderDate FROM Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID 

// Prompt:

// - Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
// - If either argument is not a number, return the value of NaN.


function addTwoNumbers(num1, num2) {
  // accepts two numeric arguments
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return NaN
  }
  // returns sum of those two numbers
  // if arg is not a number return NaN
}
// Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8


// Prompt:

// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).

// Examples:

// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0




function sumNumbers(array) {
  // start with forloop in order to iterate through the entire loop and assign value to something
  let value
  for (let i = 0; i < array.length; i++) {
    // add all the numbers together
    value += array[i]
  }
  return value 
  // accepts a single array of numbers
  // returns the sum of the numbers in the array
}

// function sumNumbers(array) {
//   // loop through the array 
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     sum =+ array[i]
//   }
//   return sum 
//   // accepts a single array of numbers
//   // returns the sum of the numbers in the array
//   // if array is empty, return 0
// }



// Give me the name of the agents who are assigned to different customers who have outstanding balances on their accounts

// Read question and write out what key words stand out to me

// name of the agents
// customers
// oustanding balances on their account. 

// Examine the tables

// Figure out what columns the answer requires

// AGENTS.AGENT_NAME CUSTOMER.CUST_NAME CUSTOMER.OUTSTANDING_AMT 

// Figure out if I need to do a join or not

// YES
// IN COMMON - AGENTS.AGENT_CODE CUSTOMER.AGENT_CODE 

// Figure out if I need a specific condition or not
// SELECT AGENTS.AGENT_NAME, CUSTOMER.CUST_NAME, CUSTOMER.OUTSTANDING_AMT FROM AGENTS JOIN CUSTOMER ON AGENTS.AGENT_CODE = CUSTOMER.AGENT_CODE

// Give me the name of the agents, the areas they are working in and the payments that have come in from those work areas. 

// Read the question and write out key words that stick out to me.

// name of the agents
// areas that they are working in
// payments

// Examine the tables.


// Figure out which columns I need in order to answer the question

// AGENTS.AGENT_NAME
// AGENTS.WORKING_AREA
// CUSTOMER.PAYMENTS

// Figure out if I need a JOIN

// SELECT AGENTS.AGENT_NAME, AGENTS.WORKING_AREA, CUSTOMER.PAYMENTS_AMT FROM AGENTS JOIN CUSTOMER ON AGENTS.AGENT_CODE = CUSTOMER.AGENT_CODE


// Figure out if there is a specific condition that I need 


// Give me the agents names and their working areas

// Read the question and write out any key words that stick out to me.
// the agent names
// working areas 
// Examine the tables
// Figure out what columns the answer requires

// AGENTS.AGENT_NAME, AGENTS.WORKING_AREA 

// Figure out if I need a JOIN or not

// Figure out if I need a specific condition

// SELECT AGENTS.AGENT_NAME, AGENTS.WORKING_AREA FROM AGENTS 

// The following SQL statement selects all the customers from the country "Mexico", in the "Customers" table

// SELECT * FROM Customers WHERE country = 'Mexico';

// Select all records where the City column has the value "Berlin".

// SELECT * FROM Customers WHERE City = 'Berlin';

// Select all records where the City column has the value 'Berlin' or 'London'

// SELECT * FROM Customers WHERE City = 'Berlin' OR City = 'London';



