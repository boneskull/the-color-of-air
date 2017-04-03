/**
 * Given a `scaleName` and a numeric value, provide a color representing the
 * relative air temperature.
 *
 * This function is curried (naively).
 * @param {string} [scaleName] - One of `F`, or `C`.  Case-insensitive.
 * @param {number|string} [degrees] - Degrees in specified scale.  Coerced to a
 *   float.  Optional if currying.
 * @returns {Function|string} Curried function or CSS-hex-style color w/ `#`
 *   prefix.
 * @throws {TypeError} When non-string `scaleName` or `NaN` `degrees`
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
    throw new TypeError(`'degrees' argument "${degrees}" cannot be coerced to float`);
  }

  scaleName = scaleName.toLowerCase();
  if (!scales[scaleName]) {
    throw new ReferenceError(`unknown scale "${scaleName}"`);
  }

  const tempScale = scales[scaleName];
  const colorIndex = Math.round(scale(degrees,
    tempScale.min,
    tempScale.max,
    0,
    scaleMax));

  return colorList[colorIndex];
}

/**
 * From "coldest" to "hottest".
 * See `swatches/` for other formats if you want 'em.
 * @type {string[]}
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

const scaleMax = colorList.length;

/**
 * Every value equal to or lower than `min` is the first array item, and
 * every value equal to or greater than `max` is the last array item.
 *
 * These values were determined in part by AccuWeather's legend, but adjusted
 * slightly to ensure a reasonable distribution for both F and C.
 *
 * Because of the fudging, Fahrenheit will show "hotter" colors at slightly
 * "colder" temperatures than Celsius.
 *
 * @type {{f: {min: number, max: number}, c: {min: number, max: number}}}
 */
export const scales = {
  f: {
    min: -10,
    max: 107
  },
  c: {
    min: -23,
    max: 42
  }
};

// stolen from https://npm.im/johnny-five
function scale (value, fromLow, fromHigh, toLow, toHigh) {
  return ((value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow) |
    0;
}
