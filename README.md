# hapi-xhr

[![npm version](https://badge.fury.io/js/hapi-xhr.svg)](http://badge.fury.io/js/hapi-xhr)

Add xhr property to a request object of hapi.

### install
```sh
npm install hapi-xhr
```

### Usage

```javascript
var Hapi = require('hapi');
var HapiXhr = require("hapi-xhr");

var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.register(HapiXhr, function(err) {

  server.route({
    method: 'GET',
    path: '/test',
    handler: function(request, reply) {
      if (request.xhr) {
        return reply({ status: 'xhr' });
      }
      return reply({ status: 'not xhr' });
    }
  });

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });

});
```
