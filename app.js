
// import packages
const socket = require('socket.io'); 
const express = require('express');
const app = express(); 
const port = 3000; 

// create a server using express 
// listen to port 3000

const server = app.listen(port, () =>{
  console.log('listening on port 3000');
});

app.use(express.static('public'));

app.get('/', (red, res) => {
 
});


app.get('/login', (red, res) => {
      res.sendfile('public/views/cuenta.html');
});

 var io = socket(server); 

 io.on('connection',function(socket) {
   console.log('socket connected'); 
      socket.on('chat', function(data){
          io.emit('chat', data)
      });
 });