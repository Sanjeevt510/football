module.exports  =   function(io) {
    io.on('connection',(socket) =>{
        console.log(`user connected succesfully for the server`);

    socket.on('createMSG',(data) =>{
        console.log('this is for the createMSG',data);
    });
    socket.on('ready',(params,callback) =>{
        socket.join(params.chat_room);
        socket.join(params.signal_room);
        //socket.emit('announce',{
        io.to(params.chat_room).emit('announce',{
                message: `New Client in the ${JSON.stringify(params)} rooroom.`
        });
    
        console.log('this is for the ready event',params)
        callback();

    });
    socket.on('send', (senddata) => {
 
           console.log('this is for the send event',senddata);
           // })
           io.to(senddata.room).emit('message', {
            message: senddata.message,
            author: senddata.author
        });
        });
        socket.on('signal', (sigdata) => {
            io.to(sigdata.room).emit('signaling_message', {
                type: sigdata.type,
                message: sigdata.message
            });
               console.log('this is for the signal event',sigdata);
               // })
            });
 
    });
}