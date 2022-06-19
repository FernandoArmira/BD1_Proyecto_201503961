"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route11controller_1 = __importDefault(require("../controllers/route11controller"));
class Route11 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route11controller_1.default.select);
        this.router.get('/:id', route11controller_1.default.selectone);
        this.router.post('/', route11controller_1.default.create);
        this.router.put('/:id', route11controller_1.default.update);
        this.router.delete('/:id', route11controller_1.default.delete);
    }
}
const route11 = new Route11();
exports.default = route11.router;
