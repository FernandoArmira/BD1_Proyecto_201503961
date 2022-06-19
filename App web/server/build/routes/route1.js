"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route1controller_1 = __importDefault(require("../controllers/route1controller"));
class Route1 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', route1controller_1.default.select);
        this.router.get('/:id', route1controller_1.default.selectone);
        this.router.post('/', route1controller_1.default.create);
        this.router.put('/:id', route1controller_1.default.update);
        this.router.delete('/:id', route1controller_1.default.delete);
    }
}
const route1 = new Route1();
exports.default = route1.router;
