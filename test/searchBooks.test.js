import { searchBooks } from "../src/searchBooks.js";

describe("searchBooks function", () => {
    const validLibrary = [
        { author: "J.K. Rowling", title: "Harry Potter and the Sorcerer's Stone", libraryID: 1 },
        { author: "J.K. Rowling", title: "Harry Potter and the Chamber of Secrets", libraryID: 2 },
        { author: "George Orwell", title: "1984", libraryID: 3 },
        { author: "J.R.R. Tolkien", title: "The Hobbit", libraryID: 4 }
    ];

    test("should return book titles as a comma-separated string for a given author", () => {
        expect(searchBooks(validLibrary, "J.K. Rowling")).toBe(
            "Harry Potter and the Sorcerer's Stone, Harry Potter and the Chamber of Secrets"
        );
        expect(searchBooks(validLibrary, "J.R.R. Tolkien")).toBe("The Hobbit");
    });

    test("should return 'NOT FOUND' if the author has no books in the library", () => {
        expect(searchBooks(validLibrary, "Isaac Asimov")).toBe("NOT FOUND");
    });

    test("should return 'NOT FOUND' if the library is empty", () => {
        expect(searchBooks([], "J.K. Rowling")).toBe("NOT FOUND");
    });

    test("should throw an error when no arguments are provided", () => {
        expect(() => searchBooks()).toThrow(Error);
    });

    test("should throw an error when only one argument is provided", () => {
        expect(() => searchBooks(validLibrary)).toThrow(Error);
        expect(() => searchBooks("J.K. Rowling")).toThrow(Error);
    });

    test("should throw an error when more than two arguments are provided", () => {
        expect(() => searchBooks(validLibrary, "J.K. Rowling", 123)).toThrow(Error);
    });

    test("should throw a TypeError if first argument is not an array", () => {
        expect(() => searchBooks("not an array", "J.K. Rowling")).toThrow(TypeError);
        expect(() => searchBooks(123, "J.K. Rowling")).toThrow(TypeError);
        expect(() => searchBooks({}, "J.K. Rowling")).toThrow(TypeError);
        expect(() => searchBooks(null, "J.K. Rowling")).toThrow(TypeError);
        expect(() => searchBooks(undefined, "J.K. Rowling")).toThrow(TypeError);
    });

    test("should throw a TypeError if second argument is not a string", () => {
        expect(() => searchBooks(validLibrary, 123)).toThrow(TypeError);
        expect(() => searchBooks(validLibrary, {})).toThrow(TypeError);
        expect(() => searchBooks(validLibrary, null)).toThrow(TypeError);
        expect(() => searchBooks(validLibrary, undefined)).toThrow(TypeError);
    });

    test("should throw an error if a book object in the library does not match the schema", () => {
        const invalidLibrary1 = [
            { author: "J.K. Rowling", title: "Harry Potter", libraryID: "not a number" }
        ];
        const invalidLibrary2 = [{ author: "J.K. Rowling", libraryID: 1 }];
        const invalidLibrary3 = [{ title: "Harry Potter", libraryID: 1 }];

        expect(() => searchBooks(invalidLibrary1, "J.K. Rowling")).toThrow(TypeError);
        expect(() => searchBooks(invalidLibrary2, "J.K. Rowling")).toThrow(Error);
        expect(() => searchBooks(invalidLibrary3, "J.K. Rowling")).toThrow(Error);
    });
});
