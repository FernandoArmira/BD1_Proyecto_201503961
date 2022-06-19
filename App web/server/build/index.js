"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const route1_1 = __importDefault(require("./routes/route1"));
const route2_1 = __importDefault(require("./routes/route2"));
const route3_1 = __importDefault(require("./routes/route3"));
const route4_1 = __importDefault(require("./routes/route4"));
const route5_1 = __importDefault(require("./routes/route5"));
const route6_1 = __importDefault(require("./routes/route6"));
const route7_1 = __importDefault(require("./routes/route7"));
const route8_1 = __importDefault(require("./routes/route8"));
const route9_1 = __importDefault(require("./routes/route9"));
const route10_1 = __importDefault(require("./routes/route10"));
const route11_1 = __importDefault(require("./routes/route11"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexroutes_1.default);
        this.app.use('/consultas', route1_1.default);
        this.app.use('/crudpais', route2_1.default);
        this.app.use('/crudfrontera', route3_1.default);
        this.app.use('/region', route4_1.default);
        this.app.use('/crudpregunta', route5_1.default);
        this.app.use('/crudrespuesta', route6_1.default);
        this.app.use('/mantrescorrecta', route7_1.default);
        this.app.use('/encuesta', route8_1.default);
        this.app.use('/mantinvento', route9_1.default);
        this.app.use('/mantinventor', route10_1.default);
        this.app.use('/mantdetalleinvento', route11_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
