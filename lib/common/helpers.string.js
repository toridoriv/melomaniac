/**
 *
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function compareTextsInEnglish(a, b) {
  return a.localeCompare(b, "en", {
    sensitivity: "base",
  });
}

module.exports = {
  compareTextsInEnglish,
};
