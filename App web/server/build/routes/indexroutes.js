"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontroller_1 = require("../controllers/indexcontroller");
class Indexroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexcontroller_1.indexcontroller.index);
    }
}
const indexroutes = new Indexroutes();
exports.default = indexroutes.router;
