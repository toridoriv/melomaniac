const { describe, it } = require("@jest/globals");
const { expect } = require("chai");
const predicateUtils = require("./utils.predicate");

describe("Predicate Utilities", () => {
  describe(".", () => {
    it("should return true if value1 is different to value2", () => {
      const value1 = "hello";
      const value2 = "goodbye";

      expect(predicateUtils.isDifferentThan(value1, value2)).to.be.true;
    });

    it("should return false if value1 is equal to value2", () => {
      const value1 = "hello";
      const value2 = "hello";

      expect(predicateUtils.isDifferentThan(value1, value2)).to.be.false;
    });
  });
});
