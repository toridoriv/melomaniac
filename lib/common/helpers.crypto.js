const { createHash } = require("node:crypto");

/**
 *
 * @param {string} value
 * @returns {string}
 */
function createHashMd5(value) {
  return createHash("MD5").update(value).digest("hex");
}

module.exports = {
  createHashMd5,
};
