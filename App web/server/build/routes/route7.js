"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route7controller_1 = __importDefault(require("../controllers/route7controller"));
class Route7 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route7controller_1.default.select);
        this.router.get('/:id', route7controller_1.default.selectone);
        this.router.post('/', route7controller_1.default.create);
        this.router.put('/:id', route7controller_1.default.update);
        this.router.delete('/:id', route7controller_1.default.delete);
    }
}
const route7 = new Route7();
exports.default = route7.router;
