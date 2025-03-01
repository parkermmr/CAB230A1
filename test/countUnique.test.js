import { countUnique } from "../src/countUnique.js";

describe("countUnique function", () => {
    test("should return 0 for an empty array", () => {
        expect(countUnique([])).toBe(0);
    });

    test("should return the correct count for an array with unique elements", () => {
        expect(countUnique([1, 2, 3, 4, 5])).toBe(5);
        expect(countUnique(["a", "b", "c"])).toBe(3);
    });

    test("should return the correct count for an array with duplicate elements", () => {
        expect(countUnique([1, 2, 2, 3, 3, 3, 4])).toBe(4);
        expect(countUnique(["apple", "banana", "apple", "orange"])).toBe(3);
    });

    test("should handle mixed types correctly", () => {
        expect(countUnique([1, "1", 2, "2", true, false, true])).toBe(6);
    });

    test("should return 1 for an array with identical elements", () => {
        expect(countUnique([5, 5, 5, 5, 5])).toBe(1);
        expect(countUnique(["hello", "hello", "hello"])).toBe(1);
    });

    test("should throw an error when no argument is provided", () => {
        expect(() => countUnique()).toThrow(Error);
    });

    test("should throw a TypeError when the argument is not an array", () => {
        expect(() => countUnique(123)).toThrow(TypeError);
        expect(() => countUnique("hello")).toThrow(TypeError);
        expect(() => countUnique({ key: "value" })).toThrow(TypeError);
        expect(() => countUnique(null)).toThrow(TypeError);
        expect(() => countUnique(undefined)).toThrow(TypeError);
        expect(() => countUnique(true)).toThrow(TypeError);
    });

    test("should throw an error when more than one argument is provided", () => {
        expect(() => countUnique([1, 2], [3, 4])).toThrow(Error);
        expect(() => countUnique([1, 2], "extra")).toThrow(Error);
    });
});
