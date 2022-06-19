"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route4controller_1 = __importDefault(require("../controllers/route4controller"));
class Route4 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', route4controller_1.default.select);
        this.router.get('/:id', route4controller_1.default.selectone);
    }
}
const route4 = new Route4();
exports.default = route4.router;
