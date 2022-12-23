const { createHashMd5 } = require("../common/helpers.crypto");
const { compareTextsInEnglish } = require("../common/helpers.string");
const { isDifferentThan } = require("../common/utils.predicate");
const config = require("./config");

/**
 * Creates an authentication signature based on Last.Fm
 * specification.
 *
 * @see {@link https://www.last.fm/api/authspec| Last.Fm Authspec}
 * @param {URLSearchParams} parameters
 * @returns {string}
 */
function getSignature(parameters) {
  const isNotFormat = isDifferentThan.bind(null, "format");
  const keys = [...parameters.keys()]
    .sort(compareTextsInEnglish)
    .filter(isNotFormat);
  let rawSignature = "";

  keys.forEach((key) => {
    const value = /** @type {string} */ (parameters.get(key));
    rawSignature += key;
    rawSignature += value;
  });

  rawSignature += config.API_SECRET;

  return createHashMd5(rawSignature);
}

/**
 *
 * @param {string} method
 * @returns {URL}
 */
function getBaseUrl(method) {
  const url = new URL(config.BASE_URL);

  url.searchParams.set("method", method);
  url.searchParams.set("api_key", config.API_KEY);
  url.searchParams.set("format", config.FORMAT);

  return url;
}

/**
 *
 * @param {URL} url
 */
function addSignatureToUrl(url) {
  const signature = getSignature(url.searchParams);

  url.searchParams.set("api_sig", signature);
}

module.exports = {
  addSignatureToUrl,
  getBaseUrl,
  getSignature,
};
