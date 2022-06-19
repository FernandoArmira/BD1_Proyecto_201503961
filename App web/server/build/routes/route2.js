"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route2controller_1 = __importDefault(require("../controllers/route2controller"));
class Route2 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route2controller_1.default.select);
        this.router.get('/:id', route2controller_1.default.selectone);
        this.router.post('/', route2controller_1.default.create);
        this.router.put('/:id', route2controller_1.default.update);
        this.router.delete('/:id', route2controller_1.default.delete);
    }
}
const route2 = new Route2();
exports.default = route2.router;
