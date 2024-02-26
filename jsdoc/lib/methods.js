/**
 * @file Contain numerous methods
 * @author Orewa pain
 */

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - The non-negative integer to calculate the factorial for.
 * @returns {number} The factorial of n.
 * @throws {Error} Throws an error if n is a negative number.
 */
function factorial(n) {
  if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Calculates the nth Fibonacci number iteratively.
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @returns {number} The nth Fibonacci number.
 * @see Recursive version: {@link fibonacciRecursive}
 * @tutorial overview
 */
function fibonacciIterative(n) {
  if (n <= 1) return n;
  
  let prev = 0;
  let current = 1;
  let temp;
  
  for (let i = 2; i <= n; i++) {
      temp = current;
      current = prev + current;
      prev = temp;
  }
  
  return current;
}

/**
 * Calculates the nth Fibonacci number recursively.
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @returns {number} The nth Fibonacci number.
 * @see Iterative version: {@link fibonacciIterative}
 * @tutorial overview
*/
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * This function calculates the area of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The area of the rectangle.
 */
function calculateRectangleArea(length, width) {
  return length * width;
}

/**
* Represents a person.
* @typedef {Object} Person
* @property {string} name - The name of the person.
* @property {number} age - The age of the person.
* @property {string} [gender] - The gender of the person (optional).
*/

/**
* Finds the oldest person from the provided list.
* @param {Person[]} people - An array of Person objects.
* @returns {Person|null} The oldest person or null if the list is empty.
*/
function findOldestPerson(people) {
  if (people.length === 0) {
      return null;
  }

  let oldestPerson = people[0];

  for (let i = 1; i < people.length; i++) {
      if (people[i].age > oldestPerson.age) {
          oldestPerson = people[i];
      }
  }

  return oldestPerson;
}

/**
* Represents a callback function to process each element in an array.
* @callback ArrayProcessor
* @param {*} element - The current element being processed in the array.
* @param {number} index - The index of the current element being processed.
* @param {Array} array - The array being processed.
*/

/**
* Applies a function to each element in the array.
* @param {Array} array - The array to process.
* @param {ArrayProcessor} callback - The function to apply to each element.
*/
function processArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
  }
}