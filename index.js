
/**
 * Round.
 */

var round = Math.round;

/**
 * Get approximate human readable time with `date`.
 *
 * @param {Number|Date} date
 * @return {String}
 * @api public
 */

module.exports = function(date){
  var now = new Date;
  var t;

  // past / future
  var diff = date > now
    ? date - now
    : now - date;

  // just now
  if (1e3 > diff) return 'just now';

  // s, m, h, d, w, m, y
  if (60 > (t = round(diff / 1e3))) return format(t, 'second');
  if (60 > (t = round(diff / 6e4))) return format(t, 'minute');
  if (24 > (t = round(diff / 3.6e+6))) return format(t, 'hour');
  if (7 > (t = round(diff / 8.64e+7))) return format(t, 'day');
  if (4.34812 > (t = diff / 6.048e+8)) return format(round(t), 'week');
  if (12 > (t = round(diff / 2.63e+9))) return format(t, 'month');
  if (10 > (t = round(diff / 3.156e+10))) return format(t, 'year');

  // decades
  return format(round(diff / 3.156e+11), 'decade');
};

/**
 * Format `n` with `unit`.
 *
 * @param {Number} n
 * @param {String} unit
 * @return {String}
 * @api private
 */

function format(n, unit){
  var a = 'hour' == unit ? 'an' : 'a';
  unit = 1 == n ? unit : unit + 's';
  return (1 == n ? a : n)
    + ' ' + unit;
}
