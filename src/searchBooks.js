/**
 * Validates that an object matches a given schema.
 * Ensures that all required properties exist and that their types match the expected types.
 *
 * @param {Object} obj - The object to validate.
 * @param {Object} schema - The schema defining required properties and their expected types.
 * @throws {TypeError} If the provided object is not a valid non-null object.
 * @throws {Error} If a required property is missing from the object.
 * @throws {TypeError} If a property does not match the expected type.
 */
function validateObject(obj, schema) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new TypeError("Expected a non-null object.");
    }

    for (const [key, rules] of Object.entries(schema)) {
        const { type, required } = rules;
        if (required && !(key in obj)) {
            throw new Error(`Missing required property: '${key}'`);
        }
        if (key in obj && typeof obj[key] !== type) {
            throw new TypeError(`Expected '${key}' to be of type '${type}', but got '${typeof obj[key]}'`);
        }
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
 * Schema definition for a book object.
 * Specifies required properties and their expected types.
 *
 * @typedef {Object} Book
 * @property {string} author - The author of the book (required).
 * @property {string} title - The title of the book (required).
 * @property {number} libraryID - The unique identifier for the book (required).
 */
const bookSchema = {
    author: { type: 'string', required: true },
    title: { type: 'string', required: true },
    libraryID: { type: 'number', required: true }
};

/**
 * Searches for books written by a specific author in a library.
 * Returns a string containing the book titles separated by commas if multiple books exist.
 * If no books by the author are found, returns 'NOT FOUND'.
 *
 * @param {Array<Book>} library - The array of book objects.
 * @param {string} authorName - The name of the author to search for.
 * @returns {string} A comma-separated list of book titles by the author or 'NOT FOUND' if no books are found.
 * @throws {TypeError} If `library` is not an array.
 * @throws {TypeError} If `authorName` is not a string.
 * @throws {Error} If any book object in the `library` does not match the `bookSchema`.
 */
export function searchBooks(library, authorName) {
    validateInputs(...arguments);
    if (!Array.isArray(library)) {
        throw new TypeError("Expected 'library' to be an array.");
    }
    if (typeof authorName !== 'string') {
        throw new TypeError("Expected 'authorName' to be a string.");
    }

    library.forEach(book => validateObject(book, bookSchema));

    const books = library
        .filter(book => book.author === authorName)
        .map(book => book.title);

    return books.length > 0 ? books.join(', ') : 'NOT FOUND';
}
