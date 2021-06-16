const httpServer = require('../../app'),
io = require('socket.io')(httpServer);
io.on('connection', socket => {
    socket.on('main-chat-message',()=>{
        console.log("hello")
    })
    socket.on('self-connect', ()=>{
        console.log('back connected')
    })
    socket.on('message', (msg)=>{
        console.log(msg)
    })
})
module.exports = io;