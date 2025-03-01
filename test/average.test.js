import { average } from '../src/average.js';

describe('average function', () => {
    test('should return the correct average for two positive numbers', () => {
        expect(average(4, 6)).toBe(5);
        expect(average(10, 20)).toBe(15);
    });

    test('should return the correct average for two negative numbers', () => {
        expect(average(-4, -6)).toBe(-5);
        expect(average(-10, -20)).toBe(-15);
    });

    test('should return the correct average for a positive and a negative number', () => {
        expect(average(10, -10)).toBe(0);
        expect(average(-5, 15)).toBe(5);
    });

    test('should return the correct average when one number is zero', () => {
        expect(average(0, 10)).toBe(5);
        expect(average(-10, 0)).toBe(-5);
    });

    test('should return the correct average when both numbers are zero', () => {
        expect(average(0, 0)).toBe(0);
    });

    test('should throw an error when more than two arguments are provided', () => {
        expect(() => average(1, 2, 3)).toThrow(Error);
        expect(() => average(1)).toThrow(Error);
    });

    test('should throw a TypeError when arguments are not numbers', () => {
        expect(() => average('4', '6')).toThrow(TypeError);
        expect(() => average(null, 5)).toThrow(TypeError);
        expect(() => average(undefined, 5)).toThrow(TypeError);
        expect(() => average({}, [])).toThrow(TypeError);
        expect(() => average(NaN, 4)).toThrow(TypeError);
    });
});
