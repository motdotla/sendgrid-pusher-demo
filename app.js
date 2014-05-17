var dotenv = require('dotenv');
dotenv.load();

var Pusher = require('pusher');
var Hapi   = require('hapi');
var port   = parseInt(process.env.PORT) || 3000;

// Create a server with a host and port
var server = Hapi.createServer('localhost', port);

// Initialize pusher
var pusher = new Pusher({
  appId:  process.env.PUSHER_APPID,
  key:    process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET
});

// Add the html routes
server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: { path: './public', listing: false, index: true }
  }
});

// Add the inbound route
server.route({
  method: 'POST',
  path:   '/inbound',
  handler: function (request, reply) {
    console.log(request.payload);

    pusher.trigger('sendgrid-pusher-demo', 'inbound', request.payload);

    reply({success: true});
  }
});

// Start the server
server.start(function() {
  console.log('Handshake.js server started at: ' + server.info.uri);
});
