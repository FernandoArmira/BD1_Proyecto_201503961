import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexroutes from './routes/indexroutes';
import route1 from './routes/route1';
import route2 from './routes/route2';
import route3 from './routes/route3';
import route4 from './routes/route4';
import route5 from './routes/route5';
import route6 from './routes/route6';
import route7 from './routes/route7';
import route8 from './routes/route8';
import route9 from './routes/route9';
import route10 from './routes/route10';
import route11 from './routes/route11';

class Server{
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(): void{
        this.app.use('/', indexroutes);
        this.app.use('/consultas', route1);
        this.app.use('/crudpais', route2);
        this.app.use('/crudfrontera', route3);
        this.app.use('/region', route4);
        this.app.use('/crudpregunta', route5);
        this.app.use('/crudrespuesta', route6);
        this.app.use('/mantrescorrecta', route7);
        this.app.use('/encuesta', route8);
        this.app.use('/mantinvento', route9);
        this.app.use('/mantinventor', route10);
        this.app.use('/mantdetalleinvento', route11);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
              console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();

