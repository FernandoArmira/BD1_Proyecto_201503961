import {Request, Response} from 'express';

import pool from '../database';

class Route8controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Encuesta', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT * FROM Encuesta WHERE idencuesta = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }


}

const route8controller = new  Route8controller();
export default route8controller;