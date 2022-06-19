"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class Route1controller {
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var x = id;
            var y = +x;
            if (y == 1) {
                yield database_1.default.query('SELECT * FROM Consulta1', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 2) {
                yield database_1.default.query('SELECT * FROM Consulta2', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 3) {
                yield database_1.default.query('SELECT * FROM Consulta3', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 4) {
                yield database_1.default.query('SELECT * FROM Consulta4', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 5) {
                yield database_1.default.query('SELECT * FROM Consulta5', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 6) {
                yield database_1.default.query('SELECT * FROM Consulta6', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 7) {
                yield database_1.default.query('SELECT * FROM Consulta7', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 8) {
                yield database_1.default.query('SELECT * FROM Consulta8', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 9) {
                yield database_1.default.query('SELECT * FROM Consulta9', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 10) {
                yield database_1.default.query('SELECT * FROM Consulta10', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 11) {
                yield database_1.default.query('SELECT * FROM Consulta11', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 12) {
                yield database_1.default.query('SELECT * FROM Consulta12', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 13) {
                yield database_1.default.query('SELECT * FROM Consulta13', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 14) {
                yield database_1.default.query('SELECT * FROM Consulta14', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 15) {
                yield database_1.default.query('SELECT * FROM Consulta15', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 16) {
                yield database_1.default.query('SELECT * FROM Consulta16', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 17) {
                yield database_1.default.query('SELECT * FROM Consulta17', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 18) {
                yield database_1.default.query('SELECT * FROM Consulta18', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 19) {
                yield database_1.default.query('SELECT * FROM Consulta19', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
            else if (y == 20) {
                yield database_1.default.query('SELECT * FROM Consulta20', function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
        });
    }
    /*public async selectone (req: Request, res: Response): Promise<any> {
        //pool.query('DESCRIBE Region');
        //res.json('Ruta 1 ');
        //res.send('Ruta 1')
        const {id} = req.params;
        const registro = await pool.query('SELECT * FROM Region WHERE idregion = ?', [id]);
        if (registro.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({text: "No existe el registro"});
        //console.log(registro);
        //res.json({text: 'Mostrando registro' + req.params.id});
    }*/
    selectone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Region WHERE idregion = ?', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('insert into region set ?', [req.body]);
            res.json({ message: 'Creando registro' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Region SET ? WHERE idregion = ?', [req.body, id]);
            res.json({ text: 'Actualizando registro' });
            //res.json({text: 'Actualizando registro' + req.params.id});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Region WHERE idregion = ?', [id]);
            res.json({ text: 'Eliminando registro' });
            //res.json({text: 'Eliminando registro' + req.params.id});
        });
    }
}
const route1controller = new Route1controller();
exports.default = route1controller;
