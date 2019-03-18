const socketIO = require('socket.io');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const container     =    require('./container');
const PORT = 3045;

container.resolve(function(users){



const app = setupExpress();

function setupExpress() {
    const app = express();
    const server = http.createServer(app);
    const io    =   socketIO(server);

    server.listen(PORT, () => {
        console.log(`server listing on port ${PORT}`);
    });
    configureExpress(app);
    require('./mytest/chats')(io);

    // add set of router
    const router = require('express-promise-router')();
    users.SetRouting(router);
    app.use(router);

    app.get('/', (req, res) => {
        console.log('firsttest' + Date.now);

        return res.render('index', { test: 'this is a test at its best i think' });
        //res.json({            message: "hello baba bana router bhee for the general use liya"+req.number        });   
    });
}
function configureExpress(app) {
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

}


console.log(`testing of package football and is git involve js file server.js`);

});