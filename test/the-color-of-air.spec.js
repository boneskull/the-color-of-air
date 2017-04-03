/* eslint-env mocha */

import range from 'lodash.range';
import {colorOfAir, colorList, scales} from '../src';
import expect from 'unexpected';

describe('the-color-of-air', function () {
  describe('colorOfAir()', function () {
    describe('when not passed arguments', function () {
      it('should return itself', function () {
        expect(colorOfAir(), 'to equal', colorOfAir);
      });
    });

    describe('when only passed `scaleName`', function () {
      it('should return a curried function', function () {
        expect(colorOfAir('f'), 'to be a', Function);
      });
    });

    describe('when passed a `scaleName` and `degrees`', function () {
      it('should return a color', function () {
        expect(colorOfAir('f', 60), 'to be a string');
      });
    });

    describe('fahrenheit behavior', function () {
      const colorF = colorOfAir('f');
      range(scales.f.min, scales.f.max, 9)
        .forEach((temp, idx) => {
          it(
            `should return "${colorList[idx]}" for degrees fahrenheit "${temp}"`,
            function () {
              expect(colorF(temp), 'to equal', colorList[idx]);
            });
        });
    });

    describe('celsius behavior', function () {
      const colorC = colorOfAir('c');
      range(scales.c.min, scales.c.max, 5)
        .forEach((temp, idx) => {
          it(`should return "${colorList[idx]}" for degrees celsius "${temp}"`,
            function () {
              expect(colorC(temp), 'to equal', colorList[idx]);
            });
        });
    });
  });
});
