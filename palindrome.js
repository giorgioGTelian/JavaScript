function isPalindrome(s) {
  // First, we'll check if the input is a string
  if (typeof s !== 'string') {
    throw new Error('Input must be a string');
  }

  // Next, we'll remove any non-alphanumeric characters from the string
  s = s.replace(/[^a-zA-Z0-9]/g, '');

  // Then, we'll check if the string is empty after removing non-alphanumeric characters
  if (s.length === 0) {
    throw new Error('Input must not be empty');
  }

  // Next, we'll split the string into two halves
  const halfLength = Math.floor(s.length / 2);
  const firstHalf = s.slice(0, halfLength);
  const secondHalf = s.slice(halfLength);

  // Then, we'll reverse the second half of the string
  secondHalf = secondHalf
    .split('')
    .reverse()
    .join('');

  // Finally, we'll compare the first half of the string to the reversed second half
  return firstHalf === secondHalf;
}

// Example usage
console.log(isPalindrome('racecar')); // True
console.log(isPalindrome('hello')); // False
console.log(isPalindrome(123)); // Error: Input must be a string
console.log(isPalindrome('')); // Error: Input must not be empty
