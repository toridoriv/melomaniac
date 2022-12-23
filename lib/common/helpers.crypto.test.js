const { describe, expect, it } = require("@jest/globals");
const cryptoHelpers = require("./helpers.crypto");

describe("Crypto Helpers", () => {
  describe(".createHashMd5", () => {
    it("should create a valid MD5 hash", () => {
      expect(cryptoHelpers.createHashMd5("test")).toBe(
        "098f6bcd4621d373cade4e832627b4f6"
      );
    });
  });
});
