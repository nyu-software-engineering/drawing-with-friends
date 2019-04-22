import io from 'socket.io'
let port = process.env.PORT || 3000
const server = io.listen(port)

server.on('connection', (socket) => {
  console.log('user connected')
  socket.emit('welcome', 'welcome man')

  socket.on('draw', (data) => {
    console.log("Received 'draw' event at (" + data.x + ', ' + data.y + ') from client IP ' + socket.handshake.address)
    socket.broadcast.emit('draw', data)
  })

  socket.on('erase-all', () => {
    console.log('erase all')
    socket.broadcast.emit('erase-all')
  })
})
