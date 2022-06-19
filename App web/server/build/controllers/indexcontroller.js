"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexcontroller = void 0;
class Indexcontroller {
    index(req, res) {
        res.json({ text: 'Proyecto 2' });
    }
}
exports.indexcontroller = new Indexcontroller();
