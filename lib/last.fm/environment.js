const { z } = require("zod");
const { getSchemaForEnvironmentString } = require("../common/helpers.schema");

const schema = z
  .object({
    LASTFM_API_KEY: getSchemaForEnvironmentString(
      "LASTFM_API_KEY",
      "API key for Last.Fm. For more info, check https://www.last.fm/api#getting-started."
    ),
    LASTFM_API_SECRET: getSchemaForEnvironmentString(
      "LASTFM_API_SECRET",
      "API secret for Last.Fm. For more info, check https://www.last.fm/api#getting-started."
    ),
    LASTFM_PASSWORD: getSchemaForEnvironmentString(
      "LASTFM_PASSWORD",
      "Your Last.Fm password."
    ),
    LASTFM_USERNAME: getSchemaForEnvironmentString(
      "LASTFM_USERNAME",
      "Your Last.Fm username or e-mail."
    ),
  })
  .describe("Environment variables required for Last.Fm connections");

module.exports = {
  $schema: schema,
  ...schema.parse(process.env),
};
