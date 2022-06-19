"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route3controller_1 = __importDefault(require("../controllers/route3controller"));
class Route3 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route3controller_1.default.select);
        this.router.get('/:id', route3controller_1.default.selectone);
        this.router.post('/', route3controller_1.default.create);
        this.router.put('/:id', route3controller_1.default.update);
        this.router.delete('/:id', route3controller_1.default.delete);
    }
}
const route3 = new Route3();
exports.default = route3.router;
