const net = require('net');

// establish connection to game server:
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding('utf-8');

 

  //upon connection to the server, we're notified of successful connection
  conn.on('connect', () => {
    console.log('You have connected to the server');
    conn.write('Name: EL');
  });

  // when we receive data from the server, we log that to the console.
  conn.on('data', (message) => {
    console.log(message);
  });
  // when we receive an error from the server, it's logged to the console.
  conn.on('error', (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = connect;