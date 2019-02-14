module.exports  =   function(io) {
    io.on('connection',(socket) =>{
        console.log(`user connected succesfully for the server`);

    socket.on('createMSG',(data) =>{
        console.log(data);
    });

    });
}