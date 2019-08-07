var soap = require('soap');
const sourceService = {
  service: {
    Source_Service: {
      Source_Port: {
        read: function(args) {
          console.log('read : ' + args.name);
          return {
            status: args.name + ' is exsit!!!',
          };
        },
      },
    },
  },
  xml: require('fs').
    readFileSync(
      '/Users/jimmy/WebstormProjects/soap-service/src/wsdl/source.wsdl',
      'utf8'),
};

const notificationService = {
  service: {
    Notification_Service: {
      Notification_Port: {
        notify: function(args) {
          console.log('receive : ' + args.message);

          const url = 'http://127.0.0.1:3000/source?wsdl';
          const cargs = {name: 'vod'};
          soap.createClient(url, function(err, client) {
            client.read(cargs, function(err, result) {
              console.log(result);
            });
          });
          // soap.createClientAsync(url).then((client) => {
          //   return client.read(args);
          // }).then((result) => {
          //   console.log(result);
          // });
          return {
            status: args.message + ' succcess!!!',
          };
        },
      },
    },
  },
  xml: require('fs').
    readFileSync(
      '/Users/jimmy/WebstormProjects/soap-service/src/wsdl/notification.wsdl',
      'utf8'),
};

const helloService = {
  service: {
    Hello_Service: {
      Hello_Port: {
        sayHello: function(args) {
          return {
            greeting: args.firstName + ' hi!!!',
          };
        },
      },
    },
  },
  xml: require('fs').
      readFileSync(
          '/Users/jimmy/WebstormProjects/soap-service/src/wsdl/sample2.wsdl',
          'utf8'),
};

const calcService = {
  service: {
    ws: {
      calc: {
        sumar: function(args) {
          const n = 1 * args.a + 1 * args.b;
          return {sumres: n};
        },

        multiplicar: function(args) {
          const n = args.a * args.b;
          return {mulres: n};
        },
      },
    },
  },
  xml: require('fs').
      readFileSync(
          '/Users/jimmy/WebstormProjects/soap-service/src/wsdl/sample1.wsdl',
          'utf8'),
};

module.exports = {
  sourceService,notificationService, helloService, calcService,
};
