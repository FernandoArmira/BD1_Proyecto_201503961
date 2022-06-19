"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route5controller_1 = __importDefault(require("../controllers/route5controller"));
class Route5 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route5controller_1.default.select);
        this.router.get('/:id', route5controller_1.default.selectone);
        this.router.post('/', route5controller_1.default.create);
        this.router.put('/:id', route5controller_1.default.update);
        this.router.delete('/:id', route5controller_1.default.delete);
    }
}
const route5 = new Route5();
exports.default = route5.router;
