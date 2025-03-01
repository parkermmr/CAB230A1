/**
 * Validates that exactly one argument is provided and that it is an array.
 * Throws an error if the argument count is incorrect or if the argument is not an array.
 *
 * @param {...any} args - The arguments to validate.
 * @throws {Error} If the number of arguments is not exactly 1.
 * @throws {TypeError} If the argument is not an array.
 */
function validateInputs(...args) {
    if (args.length !== 1) {
        throw new Error(`Expected 1 argument, but received ${args.length}`);
    }
    const [arr] = args;
    if (!Array.isArray(arr)) {
        throw new TypeError(`The argument must be an array, but received ${typeof arr}`);
    }
}

/**
 * Counts the number of unique elements in an array.
 * Uses a `Set` to determine the number of unique elements.
 * Validates the input before processing.
 *
 * @param {Array} arr - The array whose unique elements are to be counted.
 * @returns {number} The number of unique elements in the array.
 * @throws {Error} If incorrect arguments are provided.
 * @throws {TypeError} If the argument is not an array.
 */
function countUnique(arr) {
    validateInputs(...arguments);
    return new Set(arr).size;   
}

export { countUnique };
