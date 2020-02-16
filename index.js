const express = require('express');
const server = express();
const { PORT } = require('./config')
const { HomeRouter, QuoteRouter } = require('./routes');
const {notFoundMiddelware } = require('./middelwares')

server.use(express.static('./public'));
server.use(express.json());
server.use('/', QuoteRouter); 
server.use('/', HomeRouter);
server.use(notFoundMiddelware);

server.listen(PORT, () => {
    console.log(`The server is running by the port: ${PORT}`);
});
