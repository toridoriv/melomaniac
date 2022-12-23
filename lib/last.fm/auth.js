const config = require("./config");

/**
 * Description.
 */
function getToken() {
  console.log(getToken.response.$schema);
}

getToken.response = {};

getToken.response.$schema = {};

/**
 * Description.
 */
function getMobileSession() {}

module.exports = {
  getMobileSession,
  getToken,
};
