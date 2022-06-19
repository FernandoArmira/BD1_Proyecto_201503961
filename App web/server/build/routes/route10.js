"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route10controller_1 = __importDefault(require("../controllers/route10controller"));
class Route10 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route10controller_1.default.select);
        this.router.get('/:id', route10controller_1.default.selectone);
        this.router.put('/:id', route10controller_1.default.update);
    }
}
const route10 = new Route10();
exports.default = route10.router;
