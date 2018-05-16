
/**
 * Round.
 */

var round = Math.round;

var word = [];

word['en'] = require("./lang/en");
word['br'] = require("./lang/br");

/**
 * Get approximate human readable time with `date`.
 *
 * @param {Number|Date} date
 * @param {String} lang
 * @return {String}
 * @api public
 */

module.exports = function(date, lang){
  var now = new Date;
  var t;

  var language = lang || 'en';

  // past / future
  var diff = date > now
    ? date - now
    : now - date;

  // just now
  if (1e3 > diff) return word[language].just_now;

  // s, m, h, d, w, m, y
  if (60 > (t = round(diff / 1e3))) return format(t, 'second', language);
  if (60 > (t = round(diff / 6e4))) return format(t, 'minute', language);
  if (24 > (t = round(diff / 3.6e+6))) return format(t, 'hour', language);
  if (7 > (t = round(diff / 8.64e+7))) return format(t, 'day', language);
  if (4.34812 > (t = diff / 6.048e+8)) return format(round(t), 'week', language);
  if (12 > (t = round(diff / 2.63e+9))) return format(t, 'month', language);
  if (10 > (t = round(diff / 3.156e+10))) return format(t, 'year', language);

  // decades
  return format(round(diff / 3.156e+11), 'decade', language);
};

/**
 * Format `n` with `unit` and language.
 *
 * @param {Number} n
 * @param {String} unit
 * @param {String} language
 * @return {String}
 * @api private
 */

function format(n, unit, language){
  var l = word[language] || word['en'];
  var text = 1 === n ? l[unit].text : (l[unit].plural || l[unit].text + 's');
  return (1 === n ? l[unit].one : n)
    + ' ' + text;
}

