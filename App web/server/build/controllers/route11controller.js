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
class Route11controller {
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Detalle_invento', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    selectone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(id)
            var x = id.split("-");
            //console.log(x[0] + x[1])
            yield database_1.default.query('SELECT * FROM Detalle_invento WHERE invento_idinvento = ? and inventor_idinventor = ?', [x[0], x[1]], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { invento_idinvento, inventor_idinventor } = req.body;
            //console.log(req.body);
            yield database_1.default.query('insert into Detalle_invento(invento_idinvento, inventor_idinvento)  values (?,?)', [invento_idinvento, inventor_idinventor], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Detalle invento agregado' });
                }
                else {
                    console.log(err);
                }
            });
            //res.json({message: 'Creando registro'});
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { invento_idinvento, inventor_idinvento } = req.body;
            const { id } = req.params;
            //console.log(id)
            var x = id.split("-");
            //console.log(x[0] + x[1])
            yield database_1.default.query('UPDATE Detalle_invento SET invento_idinvento = ?, inventor_idinventor= ? WHERE invento_idinvento = ? and inventor_idinventor = ?', [invento_idinvento, inventor_idinvento, x[0], x[1]], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Detalle invento actualizado' });
                }
                else {
                    console.log(err);
                }
            });
            //res.json({text: 'Actualizando registro'});
            //res.json({text: 'Actualizando registro' + req.params.id});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(id)
            var x = id.split("-");
            //console.log(x[0] + x[1])
            yield database_1.default.query('DELETE FROM Detalle_invento WHERE invento_idinvento = ? and inventor_idinventor = ?', [x[0], x[1]], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Respuesta correcta borrada' });
                }
                else {
                    console.log(err);
                }
            });
            //res.json({text: 'Eliminando registro' });
            //res.json({text: 'Eliminando registro' + req.params.id});
        });
    }
}
const route11controller = new Route11controller();
exports.default = route11controller;
