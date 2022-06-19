"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route8controller_1 = __importDefault(require("../controllers/route8controller"));
class Route8 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route8controller_1.default.select);
        this.router.get('/:id', route8controller_1.default.selectone);
    }
}
const route8 = new Route8();
exports.default = route8.router;
