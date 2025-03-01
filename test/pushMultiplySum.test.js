import { pushMultiplySum } from "../src/pushMultiplySum.js";

describe("pushMultiplySum function", () => {
    test("should correctly extend the array, double elements, and return the sum", () => {
        expect(pushMultiplySum([1, 2, 3], 4)).toBe(20);
        expect(pushMultiplySum([5, 5, 5], 5)).toBe(40);
        expect(pushMultiplySum([], 2)).toBe(4);
    });

    test("should handle negative numbers", () => {
        expect(pushMultiplySum([-1, -2, -3], -4)).toBe(-20);
        expect(pushMultiplySum([-10, 0, 10], 5)).toBe(10);
    });

    test("should throw an error when no arguments are provided", () => {
        expect(() => pushMultiplySum()).toThrow(Error);
    });

    test("should throw an error when only one argument is provided", () => {
        expect(() => pushMultiplySum([1, 2, 3])).toThrow(Error);
        expect(() => pushMultiplySum(5)).toThrow(Error);
    });

    test("should throw an error when more than two arguments are provided", () => {
        expect(() => pushMultiplySum([1, 2, 3], 4, 5)).toThrow(Error);
    });

    test("should throw a TypeError if first argument is not an array", () => {
        expect(() => pushMultiplySum("not an array", 5)).toThrow(TypeError);
        expect(() => pushMultiplySum(10, 5)).toThrow(TypeError);
        expect(() => pushMultiplySum({ key: "value" }, 5)).toThrow(TypeError);
        expect(() => pushMultiplySum(null, 5)).toThrow(TypeError);
        expect(() => pushMultiplySum(undefined, 5)).toThrow(TypeError);
    });

    test("should throw a TypeError if first argument contains non-numeric values", () => {
        expect(() => pushMultiplySum([1, "two", 3], 4)).toThrow(TypeError);
        expect(() => pushMultiplySum([NaN, 2, 3], 4)).toThrow(TypeError);
        expect(() => pushMultiplySum([1, {}, 3], 4)).toThrow(TypeError);
    });

    test("should throw a TypeError if second argument is not a number", () => {
        expect(() => pushMultiplySum([1, 2, 3], "four")).toThrow(TypeError);
        expect(() => pushMultiplySum([1, 2, 3], {})).toThrow(TypeError);
        expect(() => pushMultiplySum([1, 2, 3], null)).toThrow(TypeError);
        expect(() => pushMultiplySum([1, 2, 3], undefined)).toThrow(TypeError);
    });
});
