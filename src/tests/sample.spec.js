'use strict';
import 'chai/register-should';
import sample from '../sample';

describe('App test!', function() {
  it('sayHello should return hello', function() {
    sample.sayHello().should.equal('hello');
  });
});
