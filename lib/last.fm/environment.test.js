const {
  afterAll,
  beforeAll,
  describe,
  expect,
  it,
  test,
} = require("@jest/globals");

describe("Last.Fm - Environment Module", () => {
  const REQUIRED_EXPORTED_VALUES = [
    "LASTFM_API_KEY",
    "LASTFM_API_SECRET",
    "LASTFM_PASSWORD",
    "LASTFM_USERNAME",
    "$schema",
  ];

  describe("when required variables are set", () => {
    const environment = require("./environment");

    test.each(REQUIRED_EXPORTED_VALUES)("%s should be exported", (v) => {
      const variableName = /** @type {keyof typeof environment} */ (v);

      expect(environment[variableName]).toBeDefined();
    });

    describe(".$schema", () => {
      it("should have a description", () => {
        expect(environment.$schema.description).toBeDefined();
        expect(typeof environment.$schema.description).toBe("string");
        expect(environment.$schema.description?.length).toBeGreaterThan(1);
      });
    });
  });

  describe("when required variables are not set", () => {
    beforeAll(() => {
      require("./__fixtures__/unset-environment-variables");
    });

    afterAll(() => {
      require("./__fixtures__/set-environment-variables");
    });

    it("should throw error", () => {
      expect(() => require("./environment")).toThrow();
    });
  });
});
