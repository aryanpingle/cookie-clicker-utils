/**
 * Round a number to two significant digits.
 *
 * @example
 * 1234 >> 1200
 *   89 >>   89
 * 7.23 >>  7.2
 */

export function twoSignificantDigits(val: number) {
    const digitFactor =
        Math.pow(10, Math.ceil(Math.log(Math.ceil(val)) / Math.LN10)) / 100;
    return Math.round(val / digitFactor) * digitFactor;
}
