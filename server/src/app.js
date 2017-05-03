import express                  from 'express';
import http                     from 'http';
import mongoose                 from 'mongoose';
import {API_PORT, MONGO_DB}     from './config/config';
import initializeHeader         from './config/header';
import initializeExpress        from './config/express';
import initializeRoutes         from './config/routes';


let app = express();
let server = http.Server(app);

let port = process.env.PORT || API_PORT;

initializeHeader(app);
initializeExpress(app);
initializeRoutes(app);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

mongoose.connect(MONGO_DB, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log(`MongoDB connected: ${MONGO_DB}`);
    }
});