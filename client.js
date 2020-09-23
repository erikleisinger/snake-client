const net = require('net');

// establish connection to game server:
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding('utf-8');

  conn.on('data', (message) => {
    console.log(message);
  });

  conn.on('error', (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = connect;