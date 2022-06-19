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
class Route6controller {
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Respuesta', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    selectone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM Respuesta WHERE idrespuesta = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { respuesta, letra, pregunta_idpregunta } = req.body;
            //console.log(req.body);
            yield database_1.default.query('insert into Respuesta(respuesta, letra, pregunta_idpregunta)  values (?,?,?)', [respuesta, letra, pregunta_idpregunta], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Respuesta agregada' });
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
            const { respuesta, letra, pregunta_idpregunta } = req.body;
            const { id } = req.params;
            yield database_1.default.query('UPDATE Respuesta SET respuesta = ?, letra= ?, pregunta_idpregunta = ? WHERE idrespuesta = ?', [respuesta, letra, pregunta_idpregunta, id], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Respuesta actualizada' });
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
            yield database_1.default.query('DELETE FROM Respuesta WHERE idrespuesta = ?', [id], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Respuesta borrada' });
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
const route6controller = new Route6controller();
exports.default = route6controller;
