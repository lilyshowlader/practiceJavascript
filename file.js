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