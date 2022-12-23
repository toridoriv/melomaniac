const { describe, expect, test } = require("@jest/globals");

describe("Last.Fm - Config Module", () => {
  const REQUIRED_EXPORTED_VALUES = [
    "API_KEY",
    "API_SECRET",
    "PASSWORD",
    "USERNAME",
    "BASE_URL",
    "FORMAT",
  ];

  const config = require("./config");

  test.each(REQUIRED_EXPORTED_VALUES)("%s should be exported", (v) => {
    const required = /** @type {keyof typeof config} */ (v);
    expect(config[required]).toBeDefined();
  });
});
