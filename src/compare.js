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
 * Compares two values and returns a boolean indicating whether they are strictly equal.
 * Uses strict equality (`===`) to ensure both value and type match.
 * Validates inputs before performing the comparison.
 *
 * @param {any} x - The first value to compare.
 * @param {any} y - The second value to compare.
 * @returns {boolean} `true` if `x` and `y` are equal in both value and type, otherwise `false`.
 * @throws {Error} If incorrect arguments are provided.
 */
function compare(x, y) {
    validateInputs(...arguments);
    return x === y;
}

export { compare };

