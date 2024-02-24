/**
 * Description
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @example
 * ```js
 * console.log(sum(2, 3)); // 5
 * console.log(sum(Infinity, 5)) // Infinity
 * console.log(sum())// Throws a TypeError
 * ```
 * @returns {number} - The sum of the give numbers
 * @throws {TypeError} - Will throw a TypeError if arguments are not of type number
 */

function sum(num1, num2) {
  if(typeof num1 !== "number" || typeof num2 !== "number") {
    throw TypeError("Arguments must be of type number");
  }
  return num1 + num2;
}