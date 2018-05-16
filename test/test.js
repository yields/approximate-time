
describe('approximate-time', function(){

  var time = require('../index')
    , assert = require('assert');


  describe('just now', function(){
    it('now() should return "just now"', function(){
      assert('just now' == time(new Date));
    })

    it('now() + 999 should return "just now"', function(){
      assert('just now' == time(999 + Date.now()));
    })
  })

  describe('seconds', function(){
    it('time(sec + now) should return "a second"', function(){
      assert('a second' == time(add(1e3 + 20))); // 1e3 sometimes fails bc slowness
    })

    it('time(sec * 5 + now) should return "5 seconds"', function(){
      assert('5 seconds' == time(add(1e3 * 5)));
    })

    it('time(sec * 60 + now) should return "a minute"', function(){
      assert('a minute' == time(add(1e3 * 60)));
    })
  })

  describe('minutes', function(){
    it('time(min * 5 + now) should return "5 minutes"', function(){
      assert('5 minutes' == time(add(6e4 * 5)));
    })

    it('time(min * 60 + now) should return "an hour"', function(){
      assert('an hour' == time(add(6e4 * 60)));
    })
  })

  describe('hours', function(){
    it('time(hour * 5 + now) should return "5 hours"', function(){
      assert('5 hours' == time(add(3.6e+6 * 5)));
    })

    it('time(hour * 24 + now) should return "a day"', function(){
      assert('a day' == time(add(3.6e+6 * 24)));
    })
  })

  describe('days', function(){
    it('time(day * 5 + now) should return "5 days"', function(){
      assert('5 days' == time(add(8.64e+7 * 5)));
    })

    it('time(day * 7 + now) should return "a week"', function(){
      assert('a week' == time(add(8.64e+7 * 7)));
    })
  })

  describe('weeks', function(){
    it('time(week * 3 + now) should return "3 weeks"', function(){
      assert('3 weeks' == time(add(6.048e+8 * 3)));
    })

    it('time(week * 4.4 + now) should return "a month"', function(){
      assert('a month' == time(add(6.048e+8 * 4.4)));
    })
  })

  describe('months', function(){
    it('time(month * 5 + now) should return "5 months"', function(){
      assert('5 months' == time(add(2.63e+9 * 5)));
    })

    it('time(month * 12 + now) should return "a year"', function(){
      assert('a year' == time(add(2.63e+9 * 12)));
    })
  })

  describe('years', function(){
    it('time(year * 5 + now) should return "5 years"', function(){
      assert('5 years' == time(add(3.156e+10 * 5)));
    })

    it('time(year * 10 + now) should return "a decade"', function(){
      assert('a decade' == time(add(3.156e+10 * 10)));
    })
  })

  describe('decades', function(){
    it('time(decade * 5 + now) should return "5 decades"', function(){
      assert('5 decades' == time(add(3.156e+11 * 5)));
    })

    it('time(decade * 100 * now) should return "100 decades"', function(){
      assert('100 decades' == time(sub(3.156e+11 * 100)));
    })
  })

  function add(ms){
    return new Date(ms + new Date().getTime());
  }

  function sub(ms){
    return new Date(new Date - ms);
  }

})
