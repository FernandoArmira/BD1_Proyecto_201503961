"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route6controller_1 = __importDefault(require("../controllers/route6controller"));
class Route6 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route6controller_1.default.select);
        this.router.get('/:id', route6controller_1.default.selectone);
        this.router.post('/', route6controller_1.default.create);
        this.router.put('/:id', route6controller_1.default.update);
        this.router.delete('/:id', route6controller_1.default.delete);
    }
}
const route6 = new Route6();
exports.default = route6.router;
