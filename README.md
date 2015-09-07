# hapi-xhr

[![npm version](https://badge.fury.io/js/hapi-xhr.svg)](http://badge.fury.io/js/hapi-xhr)

Add to determining xhr property to request object of hapi.

### install
```
npm install hapi-xhr
```

### Usage

```
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
```
