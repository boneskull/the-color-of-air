/**
 * Given a `scaleName` and a numeric value, provide a color representing the
 * relative air temperature.
 *
 * This function is curried (naively).
 * @param {string} [scaleName] - One of `F`, or `C`.  Case-insensitive.
 * @param {number|string} degrees - Degrees in specified scale.  Coerced to a
 *   float.
 * @returns {Function|string} Curried function or CSS-hex-style color w/ `#`
 *   prefix.
 * @throws {TypeError} When non-string `scaleName` or NaN `value`
 * @throws {ReferenceError} When unknown `scaleName`
 */
export function colorOfAir (scaleName, degrees) {
  if (!arguments.length) {
    return colorOfAir;
  }
  if (arguments.length === 1) {
    return colorOfAir.bind(null, scaleName);
  }
  if (!(typeof scaleName === 'string' && scaleName.length)) {
    throw new TypeError(`'scaleName' argument must be a nonempty string`);
  }
  degrees = parseFloat(degrees);
  if (isNaN(degrees)) {
    throw new TypeError(
      `'degrees' argument "${degrees}" cannot be coerced to float`);
  }
  scaleName = scaleName.toLowerCase();
  if (!tempScales[scaleName]) {
    throw new ReferenceError(`unknown scale "${scaleName}"`);
  }
  const tempScale = tempScales[scaleName];

  const index = Math.round(
    scale(degrees, tempScale.min, tempScale.resolution, 0, 13));

  return colorList[index];
}

// stolen from https://npm.im/johnny-five
function scale (value, fromLow, fromHigh, toLow, toHigh) {
  return ((value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow) |
    0;
}

/**
 * From "coldest" to "hottest"
 */
export const colorList = [
  '#feffff',
  '#d1c9df',
  '#a496c0',
  '#3993ce',
  '#0772b8',
  '#03902b',
  '#2dc558',
  '#fecf3b',
  '#ec9800',
  '#dd531e',
  '#c53600',
  '#b10909',
  '#6f0015'
];

// const lastColorIndex = colorList.length - 1;

/**
 * Every value equal to or lower than `min` is the first array item.
 */
const tempScales = {
  f: {
    min: -10,
    resolution: 107
  },
  c: {
    min: -23,
    resolution: 42
  }
};
