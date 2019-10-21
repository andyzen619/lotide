const assertEqual = require("../assertEqual");
const tail = require("../tail");
const chai = require("chai");
const assert = chai.assert;

describe("Lotite Tail Test", function() {

  it("should return labs given and array of three elements: [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", function() {
    let input = ["Yo Yo", "Lighthouse", "Labs"];
    let output = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), output);
  });

  it("should return empty array when passed and empty array", function() {
    let input = [];
    let output = [];
    assert.deepEqual(tail(input), output);
  });

  it("Should return and empty array when passe an array with one element", function() {
    let input = [1];
    let output = [];
    assert.deepEqual(tail(input), output);
  });
});

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!