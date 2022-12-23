const { describe, it, test } = require("@jest/globals");
const { expect } = require("chai");

describe("Last.Fm - Helpers Module", () => {
  const REQUIRED_EXPORTED_VALUES = ["getSignature", "getBaseUrl"];
  const helpers = require("./helpers");

  test.each(REQUIRED_EXPORTED_VALUES)("should export the function %s", (v) => {
    const required = /** @type {keyof typeof helpers} */ (v);
    expect(helpers[required]).to.be.instanceOf(Function);
  });

  describe(".getSignature", () => {
    it("should return a valid API signature according to Last.Fm specification", () => {
      const searchParams = new global.URLSearchParams({
        api_key: "YOUR_API_KEY",
        artist: "KITANO REM",
        format: "json",
        method: "track.love",
        sk: "YOUR_SESSION_KEY",
        track: "RAINSICK",
      });

      const signature = helpers.getSignature(searchParams);

      expect(signature).to.be.equal("800b8884b00c9343d1d425ed271e0f42");
    });
  });

  describe(".getBaseUrl", () => {
    const url = helpers.getBaseUrl("track.love");

    it("should return an instance of URL", () => {
      expect(url).to.be.instanceOf(URL);
    });

    it("should have a method defined in its search parameters", () => {
      expect(url.searchParams.get("method")).to.be.a("string");
    });

    it("should have an api_key defined in its search parameters", () => {
      expect(url.searchParams.get("api_key")).to.be.a("string");
    });

    it("should have a format defined in its search parameters", () => {
      expect(url.searchParams.get("format")).to.be.a("string");
    });
  });

  describe(".addSignatureToUrl", () => {
    it("should add to given URL searchParams an API signature", () => {
      const url = helpers.getBaseUrl("track.love");
    });
  });
});
