# the-color-of-air

> A color spectrum representing air temperature

## Summary

Provides a function which returns a reasonable color (in CSS hex format) for the relative air temperature.

## Install

```shell
$ npm install the-color-of-air --save
```

This module has no production dependencies.
 
It should work in relatively modern browsers.

## Usage

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

// get at raw list
import {colorList} from 'the-color-of-air';
colorList[2]; // #a496c0 "amethyst smoke"
```

## Notes

These colors are pulled from [AccuWeather](http://www.accuweather.com/)'s radar maps.

## License

Copyright 2017, [Christopher Hiller](https://boneskull.com).  Licensed Apache-2.0.
