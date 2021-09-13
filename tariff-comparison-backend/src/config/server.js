
require('./setConfig');

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../config/db-connection');
var bodyParser = require('body-parser');
 const apiErrorHandler = require('../util/api-error-handler');
class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || config.port;
        this.host = process.env.HOST || config.host;
        this.productPath = '/product'; 

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }
 


    middlewares() {

        // CORS
        this.app.use( cors() );


        this.app.use(bodyParser.json());
        
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
                
    }

    routes() {
        this.app.use( this.productPath, require('../routes/product.route'));
       
        
        
        this.app.use(apiErrorHandler);
    }

    listen() {
        this.app.listen( this.port, () => {
            
            console.log('****************** SERVER STARTED ************************');
            console.log('***************  http://%s:%s  ******************', this.host, this.port );            
        });
    }

}




module.exports = Server;
