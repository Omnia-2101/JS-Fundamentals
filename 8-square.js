// Parse the first argument as an integer
const size = parseInt(process.argv[2]);

// Check if the argument is not a number
if (isNaN(size)) {
  console.log('Missing size');
} 
// If size is zero or negative, print nothing (do nothing)
else if (size <= 0) {
  // no output for zero or negative size
} 
// Otherwise, print the square
else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}