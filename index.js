"use strict";

exports.register = function (server, options, next) {
  server.ext("onRequest", function (request, reply) {
    request.xhr = /^xmlhttprequest/i.test(request.headers["x-requested-with"]);
    return reply["continue"]();
  });
  next();
};

exports.register.attributes = {
  name: 'xhr',
  version: '1.0.0',
  pkg: require('./package.json')
};
