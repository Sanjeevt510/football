$(document).ready(function(){
    var sockets     =   io();
    sockets.on('connect',function(){
        console.log('client user connect connected client');
    });
    $('#loginform').on('submit',function(e){
        e.preventDefault();
        var msg = $('#msg').val();
        console.log(msg);
        sockets.emit('createMSG',{
            text:msg
        });
    });

});