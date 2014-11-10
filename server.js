var cc     = require('config-multipaas'),
    Hapi   = require('hapi'),
    path   = require('path')
var config = cc()
var server = Hapi.createServer(config.get('IP'), config.get('PORT'), {
  cors:  true,
  files: { relativeTo: path.resolve('.','static')}
});

// Routes
server.route({
  method: 'GET',
  path: '/status', 
  handler: function (request, reply) { 
    reply( {"status": "ok"} )
  }
})
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: { directory: { path: '.' }} // relativeTo: '/static/'
})

server.start(function () {
  console.log('Server started at: ' + server.info.uri);
});
