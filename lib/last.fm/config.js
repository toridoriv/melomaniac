const environment = require("./environment");

module.exports = Object.freeze({
  /**
   * API key for Last.Fm. For more info, check https://www.last.fm/api#getting-started.
   *
   * @constant
   */
  API_KEY: environment.LASTFM_API_KEY,
  /**
   * API secret for Last.Fm. For more info, check https://www.last.fm/api#getting-started.
   *
   * @constant
   */
  API_SECRET: environment.LASTFM_API_SECRET,
  /**
   * The API root URL of Last.Fm.
   *
   * @constant
   */
  BASE_URL: "https://ws.audioscrobbler.com/2.0/",
  /**
   * Format in which API responses should be
   *
   * @constant
   */
  FORMAT: "json",
  /**
   * Your Last.Fm password.
   *
   * @constant
   */
  PASSWORD: environment.LASTFM_PASSWORD,
  /**
   * Your Last.Fm username or e-mail.
   *
   * @constant
   */
  USERNAME: environment.LASTFM_USERNAME,
});
