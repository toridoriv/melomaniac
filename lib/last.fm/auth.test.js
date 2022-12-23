const { beforeAll, describe, expect, test } = require("@jest/globals");

beforeAll(() => {
  require("./__fixtures__/set-environment-variables");
});

describe("Last.Fm - Auth Module", () => {
  const REQUIRED_EXPORTED_VALUES = ["getToken", "getMobileSession"];
  const auth = require("./auth");

  test.each(REQUIRED_EXPORTED_VALUES)("should export the function %s", (v) => {
    const required = /** @type {keyof typeof auth} */ (v);
    expect(auth[required]).toBeDefined();
    expect(typeof auth[required]).toBe("function");
  });

  test.each(REQUIRED_EXPORTED_VALUES)(
    "function %s should have property response.$schema",
    (v) => {
      const required = /** @type {keyof typeof auth} */ (v);
      // @ts-ignore
      expect(auth[required].response?.$schema).toBeDefined();
    }
  );
});
