const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const chai = require("chai");
const assert = chai.assert;

describe("Lotide Middle", function() {

  it("Should return turn an array of 2, 3 when passed an array of 1,2,3,4 ", function() {
    const input = [1, 2, 3, 4];
    const output = [2, 3];
    assert.deepEqual(middle(input), output);
  })


  it("Should return a single element array when passed an odd number element array.", function() {
    const input = [1, 2, 3, 4, 5];
    const output = [3];
    assert.deepEqual(middle(input), output);
  })

  it("Should return and empty array when passed an empty array.", function() {
    const input = [];
    const output = [];
    assert.deepEqual(middle(input), output);
  })

  it("Should return empty array when passed with an array of two elements", function() {
    const input = [1, 2];
    const output = [];
    assert.deepEqual(middle(input), output);
  })

})
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);