function recursiveCount(num = 0) {
  
  if (num <= 10) {
    console.log(num)
    recursiveCount(num+1);
  }

}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Create a recursive function that prints from 0-10

no argument = 0
console.logs current number

if number is less than or equal to 10
  print current number
  call recursiveCount with number+1

*/