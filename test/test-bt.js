
describe('approximate-time: br', function(){

  var time = require('../index')
    , assert = require('assert');


  describe('agora', function(){
    it('now() should return "agora"', function(){
      assert('agora' == time(new Date, 'br'));
    })

    it('now() + 999 should return "just now"', function(){
      assert('agora' == time(999 + Date.now(), 'br'));
    })
  })

  describe('segundos', function(){
    it('time(sec + now) should return "um segundo"', function(){
      assert('um segundo' == time(add(1e3 + 20), 'br')); // 1e3 sometimes fails bc slowness
    })

    it('time(sec * 5 + now) should return "5 segundos"', function(){
      assert('5 segundos' == time(add(1e3 * 5), 'br'));
    })

    it('time(sec * 60 + now) should return "um minuto"', function(){
      assert('um minuto' == time(add(1e3 * 60), 'br'));
    })
  })

  describe('minutos', function(){
    it('time(min * 5 + now) should return "5 minutos"', function(){
      assert('5 minutos' == time(add(6e4 * 5), 'br'));
    })

    it('time(min * 60 + now) should return "uma hora"', function(){
      assert('uma hora' == time(add(6e4 * 60), 'br'));
    })
  })

  describe('horas', function(){
    it('time(hour * 5 + now) should return "5 horas"', function(){
      assert('5 horas' == time(add(3.6e+6 * 5), 'br'));
    })

    it('time(hour * 24 + now) should return "um dia"', function(){
      assert('um dia' == time(add(3.6e+6 * 24), 'br'));
    })
  })

  describe('dias', function(){
    it('time(day * 5 + now) should return "5 dias"', function(){
      assert('5 dias' == time(add(8.64e+7 * 5), 'br'));
    })

    it('time(day * 7 + now) should return "uma semana"', function(){
      assert('uma semana' == time(add(8.64e+7 * 7), 'br'));
    })
  })

  describe('semanas', function(){
    it('time(week * 3 + now) should return "3 semanas"', function(){
      assert('3 semanas' == time(add(6.048e+8 * 3), 'br'));
    })

    it('time(week * 4.4 + now) should return "um mês"', function(){
      assert('um mês' == time(add(6.048e+8 * 4.4), 'br'));
    })
  })

  describe('meses', function(){
    it('time(month * 5 + now) should return "5 meses"', function(){
      assert('5 meses' == time(add(2.63e+9 * 5), 'br'));
    })

    it('time(month * 12 + now) should return "um ano"', function(){
      assert('um ano' == time(add(2.63e+9 * 12), 'br'));
    })
  })

  describe('ano', function(){
    it('time(year * 5 + now) should return "5 anos"', function(){
      assert('5 anos' == time(add(3.156e+10 * 5), 'br'));
    })

    it('time(year * 10 + now) should return "uma decada"', function(){
      assert('uma decada' == time(add(3.156e+10 * 10), 'br'));
    })
  })

  describe('decadas', function(){
    it('time(decade * 5 + now) should return "5 decadas"', function(){
      assert('5 decadas' == time(add(3.156e+11 * 5), 'br'));
    })

    it('time(decade * 100 * now) should return "100 decadas"', function(){
      assert('100 decadas' == time(sub(3.156e+11 * 100), 'br'));
    })
  })

  function add(ms){
    return new Date(ms + new Date().getTime());
  }

  function sub(ms){
    return new Date(new Date - ms);
  }

})
