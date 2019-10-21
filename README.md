# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andyzen619/lotide`

**Require it:**

`const _ = require('@andyzen619/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(str)`: Returns a object that contains the number of occurances of each letter in string.
* `countOnly(itemsToCount, array)`: Returns an object that contains the count of items in an array
* `findKey(object, callback)`: Returns a key based on callback function.
* `findKeyByValue(object, value)`: Returns the first key that's value is value
* `flatten(array)`: Returns an array that contains all the items without the nested array.
* `letterPosition(str)`: Returns and object whos keys are the letters of string and the value is an array of indices for that letter
* `map(array, callback)`: Returns an array containing all the items of array that satisfies the callback condition
* `middle(array)`: Returns an array containing the middle items.
* `tail(array)`: Returns an array with the first item of array ommitted.
* `takeUntil(array, callback)`: Returns an array that has all the elements up to when the callback function returns true
* `without(arr1, arr2)`:Returns a new array that contains items in arr1 that are not in arr2 
* `head(arr)`: Returns the first item of arr.
