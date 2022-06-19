"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route9controller_1 = __importDefault(require("../controllers/route9controller"));
class Route9 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route9controller_1.default.select);
        this.router.get('/:id', route9controller_1.default.selectone);
        this.router.put('/:id', route9controller_1.default.update);
    }
}
const route9 = new Route9();
exports.default = route9.router;
