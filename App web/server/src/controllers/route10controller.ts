import {Request, Response} from 'express';

import pool from '../database';

class Route10controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Inventor', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT * FROM Inventor WHERE idinventor = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }


    public async update (req: Request, res: Response): Promise<void>{
        const {nombre, pais_idpais}= req.body;
        const { id } = req.params;
        await pool.query('UPDATE Inventor SET nombre = ?, pais_idpais= ? WHERE idinventor = ?',[nombre, pais_idpais, id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Inventor actualizado'});
            } else{
                console.log(err);
            }
        
        });
        //res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }


}

const route10controller = new  Route10controller();
export default route10controller;