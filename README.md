# the-color-of-air [![Build Status](https://travis-ci.org/boneskull/the-color-of-air.svg?branch=master)](https://travis-ci.org/boneskull/the-color-of-air)

<img src="https://cldup.com/-1AEd2IfBy.png" title="swatches" alt="swatches" width="586" height="46"/>

> A color spectrum representing air temperature

## Summary

Provides a function which returns a reasonable color (in CSS hex format) for the relative air temperature.

For Node.js & browsers.

## Install

## Yarn (preferred)

```shell
$ yarn add the-color-of-air
```

## npm

```shell
$ npm install the-color-of-air --save
```

## Usage

This library is exported as a UMD bundle.

### ES2015+

```js
import {colorOfAir} from 'the-color-of-air';

// fahrenheit
colorOfAir('f', 32); // #0772b8 "french blue"
colorOfAir('f', 73); // #dd531e "flame"

// celsius
colorOfAir('c', 27); // #c53600 "mahogany"

// curry
const colorOfFahrenheit = colorOfAir('f');
colorOfFahrenheit(0); // #d1c9df "languid lavender"

// raw array
import {colorList} from 'the-color-of-air';
colorList[2]; // #a496c0 "amethyst smoke"
```

## Node.js

```js
const {colorOfAir} = require('the-color-of-air');
// etc
```

## Browser

```html
<!-- latest minified version -->
<script src="https://unpkg.com/the-color-of-air"></script>

<script>
(function () {
  const colorOfAir = window['the-color-of-air'].colorOfAir;
  // etc
}());
</script>
```

## Swatches

Swatches in various formats are available in the [swatches/](https://github.com/boneskull/the-color-of-air/tree/master/swatches) directory.

These files are *not* published to the npm registry.

## Notes

These colors are pulled from [AccuWeather](http://www.accuweather.com/)'s radar maps.

## License

Copyright 2017, [Christopher Hiller](https://boneskull.com).  Licensed Apache-2.0.
