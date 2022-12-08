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

console.log(shortDresses)
// filter for fall dresses
let fallDresses = dresses.filter(dress => {
  return dress.season === 'fall'
})