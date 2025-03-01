/**
 * Validates that the input is an array of numbers.
 * Throws an error if the input is not an array or contains non-numeric values.
 *
 * @param {any} vec - The array to validate.
 * @throws {TypeError} If `vec` is not an array.
 * @throws {TypeError} If `vec` contains non-numeric values.
 */
function validateArray(vec) {
    if (!Array.isArray(vec)) {
        throw new TypeError(`Expected 'vec' to be an array, but received ${typeof vec}`);
    }
    if (!vec.every(num => typeof num === 'number' && !isNaN(num))) {
        throw new TypeError("Array 'vec' must contain only valid numbers.");
    }
}

/**
 * Validates that the input is a valid number.
 * Throws an error if the input is not a number or is NaN.
 *
 * @param {any} x - The value to validate.
 * @throws {TypeError} If `x` is not a number or is NaN.
 */
function validateNumber(x) {
    if (typeof x !== 'number' || isNaN(x)) {
        throw new TypeError(`Expected 'x' to be a valid number, but received ${typeof x}`);
    }
}

/**
 * Validates that exactly two arguments are provided.
 * Throws an error if the number of arguments is incorrect.
 *
 * @param {...any} args - The arguments to validate.
 * @throws {Error} If the number of arguments is not exactly 2.
 */
function validateInputs(...args) {
    if (arguments.length !== 2) {
        throw new Error(`Expected 2 arguments, but received ${args.length}`);
    }
}

/**
 * Extends an array by adding a new number, doubles all elements, and returns the sum.
 * Validates inputs before processing.
 *
 * @param {number[]} vec - The numeric array to extend and process.
 * @param {number} x - The extra number to add to the array.
 * @returns {number} The sum of all doubled elements in the extended array.
 * @throws {TypeError} If `vec` is not a valid numeric array.
 * @throws {TypeError} If `x` is not a valid number.
 */
function pushMultiplySum(vec, x) {
    validateInputs(...arguments);
    validateArray(vec);
    validateNumber(x);

    const extendedVec = [...vec, x].map(num => num * 2);
    return extendedVec.reduce((sum, num) => sum + num, 0);
}

export { pushMultiplySum };