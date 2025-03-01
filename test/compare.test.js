import { compare } from "../src/compare.js";

describe("compare function", () => {
    test("should return true for strictly equal primitive values", () => {
        expect(compare(5, 5)).toBe(true);
        expect(compare("hello", "hello")).toBe(true);
        expect(compare(true, true)).toBe(true);
        expect(compare(null, null)).toBe(true);
        expect(compare(undefined, undefined)).toBe(true);
    });

    test("should return false for different primitive values", () => {
        expect(compare(5, 10)).toBe(false);
        expect(compare("hello", "world")).toBe(false);
        expect(compare(true, false)).toBe(false);
        expect(compare(null, undefined)).toBe(false);
    });

    test("should return false for same values but different types", () => {
        expect(compare(5, "5")).toBe(false);
        expect(compare(true, "true")).toBe(false);
        expect(compare(0, false)).toBe(false);
        expect(compare(null, "")).toBe(false);
    });

    test("should return true for objects that are strictly equal (same reference)", () => {
        const obj = { a: 1 };
        expect(compare(obj, obj)).toBe(true);

        const arr = [1, 2, 3];
        expect(compare(arr, arr)).toBe(true);
    });

    test("should return false for different object instances with same content", () => {
        expect(compare({ a: 1 }, { a: 1 })).toBe(false);
        expect(compare([1, 2, 3], [1, 2, 3])).toBe(false);
    });

    test("should throw an error when fewer than 2 arguments are provided", () => {
        expect(() => compare(5)).toThrow(Error);
        expect(() => compare()).toThrow(Error);
    });

    test("should throw an error when more than 2 arguments are provided", () => {
        expect(() => compare(5, 5, 10)).toThrow(Error);
        expect(() => compare(1, 2, 3, 4)).toThrow(Error);
    });
});
