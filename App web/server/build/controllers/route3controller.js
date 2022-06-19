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
class Route3controller {
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Frontera', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    selectone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM Frontera WHERE pais_idpais = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { norte, sur, este, oeste, pais_idpais, pais_idpais1 } = req.body;
            //console.log(req.body);
            yield database_1.default.query('insert into Frontera(norte, sur, este, oeste, pais_idpais, pais_idpais1)  values (?,?,?,?,?,?)', [norte, sur, este, oeste, pais_idpais, pais_idpais1], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Frontera agregada' });
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
            const { norte, sur, este, oeste, pais_idpais1 } = req.body;
            const { id } = req.params;
            yield database_1.default.query('UPDATE Frontera SET norte = ?, sur= ?, este = ?, oeste = ?, pais_idpais1= ? WHERE pais_idpais = ?', [norte, sur, este, oeste, pais_idpais1, id], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Frontera actualizada' });
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
            yield database_1.default.query('DELETE FROM Frontera WHERE pais_idpais = ?', [id], (err, rows, fields) => {
                if (!err) {
                    res.json({ Status: 'Frontera borrada' });
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
const route3controller = new Route3controller();
exports.default = route3controller;
