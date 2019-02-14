const container     =    require('./container');
const socketIO = require('socket.io');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const PORT = 3050;

container.resolve(function(users){
    const app   = setupExpress();

    function setupExpress() {
        const app   =   express(); 
        const server    =   http.createServer(app);
        const io    =   socketIO(server);

        server.listen(PORT,()=>{
            console.log(`connected / listening on port ${PORT}`);
        });

        configureExpress(app);
        require('./mysockets/signals.js')(io);
            // add set of router
    const router = require('express-promise-router')();
    users.SetRouting(router);
    app.use(router);

    }

    function configureExpress(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    
    }
});