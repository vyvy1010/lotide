# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vypham/lotide`

**Require it:**

`const _ = require('@vypham/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: A function is used to compare two values (primitive types: numbers, strings...) and prints out a colorful successful or failure message.
* `assertArraysEqual(...)`: A function for asserting that two arrays are equal.
* `assertObjectsEqual(...)`: A function takes in two objects and console.log an appropriate message to the console, based on a perfect match.
* `countLetters(...)`: A function takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(...)`: A function takes in a collection of items and return counts for a specific subset of those items.
* `eqArrays(...)`: A function takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(...)`: A function takes in two objects and returns true or false, based on a perfect match.
* `findKey(...)`: A function takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: A function searches for a key on an object where its value matches a given value.
* `flatten(...)`: A function takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array (a single-level array).
* `head(...)`: A function is used to retrieve the first element from the array (the "head" of the array).
* `letterPositions(...)`: A function returns all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: A function returns a new array based on the results of the callback function.
* `middle(...)`: A function takes in an array and return the middle-most element(s) of the given array. The length of the returned elements could vary depending on the length of the given array.
* `tail(...)`: A function is used to retrieve every element except the head (first element) of the array.
* `takeUntil(...)`: A function returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(...)`: A function returns a subset of a given array, removing unwanted elements.