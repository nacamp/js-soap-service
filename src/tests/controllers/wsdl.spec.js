'use strict';
import 'chai/register-should';
import wsdl from '../../controllers/wsdl';
describe('controllers.wsdl', () => {
  it('helloService', function() {
    wsdl.helloService.service.Hello_Service.Hello_Port.sayHello(
      {firstName: 'kim'}).greeting.should.equal('kim hi!!!');
  });
});


// 'use strict';
// import 'chai/register-should';
// import rewire from 'rewire';
// const wsdl = rewire('../../controllers/wsdl');
//
// describe('controllers.wsdl', () => {
//   const helloService = wsdl.__get__('helloService2');
//   it('helloService', function() {
//     helloService.service.Hello_Service.Hello_Port.sayHello({firstName: 'kim'}).
//       greeting.
//       should.
//       equal('kim hi!!!');
//   });
// });
