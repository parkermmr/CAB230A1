/**
 * Validates that exactly two numeric arguments are provided.
 * Throws an error if the number of arguments is incorrect or if any argument is not a valid number.
 *
 * @param {...any} args - The arguments to validate.
 * @throws {Error} If the number of arguments is not exactly 2.
 * @throws {TypeError} If any argument is not a number or is NaN.
 */
function validateInputs(...args) {
    if (args.length !== 2) {
        throw new Error(`Expected 2 arguments, but received ${args.length}`);
    }
    args.forEach((arg, index) => {
        if (typeof arg !== 'number' || isNaN(arg)) {
            throw new TypeError(`Argument ${index + 1} must be a valid number, received ${typeof arg}`);
        }
    });
}

/**
 * Computes the average of two numbers.
 * Validates inputs before performing the calculation.
 *
 * @param {number} x - The first number.
 * @param {number} y - The second number.
 * @returns {number} The average of x and y.
 * @throws {Error} If incorrect arguments are provided.
 * @throws {TypeError} If inputs are not valid numbers.
 */
export function average(x, y) {
    validateInputs(...arguments);
    return (x + y) / 2;
}

