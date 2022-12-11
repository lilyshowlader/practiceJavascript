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
