import {Request, Response} from 'express';

import pool from '../database';

class Route4controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Region', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT * FROM Region WHERE idregion = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

}

const route4controller = new  Route4controller();
export default route4controller;