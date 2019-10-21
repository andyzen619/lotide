const assertEqual = require("../assertEqual");
const head = require("../head");
const chai = require("chai");
const assert = chai.assert;

describe('head', function() {

  it("Should return 5 when passed [5,6,7]", function() {
    let input = [5, 6, 7];
    let output = 5;
    assert.equal(head(input), output);
  })

  it("should return \"hello\" when passed [\"hello\", \"lighthouse\", \"labs\"] ", function() {
    let input = ["Hello", "Lighthouse", "Labs"];
    let output = "Hello";
    assert.equal(head(input), output);
  })

  it("Should return undefined when passed an empty array", function() {
    let input = [];
    let output = undefined;
    assert.equal(head(input), output);
  })
});