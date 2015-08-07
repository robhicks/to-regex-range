# to-regex-range [![NPM version](https://badge.fury.io/js/to-regex-range.svg)](http://badge.fury.io/js/to-regex-range)

> Returns a regex-compatible range from two numbers, min and max. Useful for creating regular expressions to validate numbers, ranges, years, etc.

Inspired by the python lib [range-regex](https://github.com/dimka665/range-regex), it has never been easier to validate numbers and number ranges with regex!

The [unit tests generate millions of patterns](./test/test.js) to provide brute-force validation that the generated regex-ranges are correct.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i to-regex-range --save
```

## Usage

```js
var toRegexRange = require('to-regex-range');

var re = new RegExp(toRegexRange('1', '99'));
re.test('50');
//=> true
```

**Examples**

```js
toRegexRange('111', '555');
//=> '11[1-9]|1[2-9]\d|[2-4]\d{2}|5[0-4]\d|55[0-5]'
toRegexRange('5', '5');
//=> '5'
toRegexRange('5', '6');
//=> '[5-6]'
toRegexRange('51', '229');
//=> '5[1-9]|[6-9]\d|1\d{2}|2[0-2]\d'
```

When the `min` is larger than the `max`, a regex logical `or` is returned:

```js
toRegexRange('51', '29');
//=> '51|29'
```

Currently this does not support steps (increments) or zero-padding.

## Related projects

* [expand-range](https://github.com/jonschlinkert/expand-range): Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See… [more](https://github.com/jonschlinkert/expand-range)
* [fill-range](https://github.com/jonschlinkert/fill-range): Fill in a range of numbers or letters, optionally passing an increment or multiplier to… [more](https://github.com/jonschlinkert/fill-range)
* [micromatch](https://github.com/jonschlinkert/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. Just… [more](https://github.com/jonschlinkert/micromatch)
* [repeat-element](https://github.com/jonschlinkert/repeat-element): Create an array by repeating the given value n times.
* [repeat-string](https://github.com/jonschlinkert/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/to-regex-range/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 07, 2015._