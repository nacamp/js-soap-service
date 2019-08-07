const soap = require('soap');
// const wsdlController = require('../../controllers/wsdl');
import wsdlController from '../../controllers/wsdl';

const route = (app) => {
  soap.listen(app, '/source', wsdlController.sourceService.service,
    wsdlController.sourceService.xml, function() {
      console.log('source soap initialized');
    });
  soap.listen(app, '/notification', wsdlController.notificationService.service,
    wsdlController.notificationService.xml, function() {
      console.log('notification soap initialized');
    });
  soap.listen(app, '/hello', wsdlController.helloService.service,
    wsdlController.helloService.xml, function() {
      console.log('hello soap initialized');
    });
  soap.listen(app, '/calc', wsdlController.calcService.service,
    wsdlController.calcService.xml, function() {
      console.log('calc soap initialized');
    });
};
// module.exports = route;
module.exports = {
  route,
};
/*
wsdl url
http://127.0.0.1:3000/source?wsdl
http://127.0.0.1:3000/notification?wsdl
http://127.0.0.1:3000/hello?wsdl
 */
