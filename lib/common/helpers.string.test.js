const { describe, it } = require("@jest/globals");
const { expect } = require("chai");
const stringHelpers = require("./helpers.string");

describe("String Helpers", () => {
  describe(".compareTextsInEnglish", () => {
    it("should return 0 if texts are equal", () => {
      const result = stringHelpers.compareTextsInEnglish("hello", "HELLO");

      expect(result).to.be.equal(0);
    });

    it("should return -1 if a should be sorted before than b", () => {
      const result = stringHelpers.compareTextsInEnglish("ab", "cd");

      expect(result).to.be.equal(-1);
    });

    it("should return 1 if a should be sorted after than b", () => {
      const result = stringHelpers.compareTextsInEnglish("cd", "ab");

      expect(result).to.be.equal(1);
    });
  });
});
