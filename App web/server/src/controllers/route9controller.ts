import {Request, Response} from 'express';

import pool from '../database';

class Route9controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Invento', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT * FROM Invento WHERE idinvento = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }


    public async update (req: Request, res: Response): Promise<void>{
        const {nombre, anio}= req.body;
        const { id } = req.params;
        await pool.query('UPDATE Invento SET nombre = ?, anio= ? WHERE idinvento = ?',[nombre, anio, id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Invento actualizado'});
            } else{
                console.log(err);
            }
        
        });
        //res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }


}

const route9controller = new  Route9controller();
export default route9controller;