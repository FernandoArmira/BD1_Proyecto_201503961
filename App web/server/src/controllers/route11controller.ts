import {Request, Response} from 'express';

import pool from '../database';

class Route11controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Detalle_invento', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        //console.log(id)
        var x = id.split("-");
        //console.log(x[0] + x[1])
        await pool.query('SELECT * FROM Detalle_invento WHERE invento_idinvento = ? and inventor_idinventor = ?',[x[0], x[1]], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        const {invento_idinvento, inventor_idinventor}= req.body;
        //console.log(req.body);
        await pool.query('insert into Detalle_invento(invento_idinvento, inventor_idinvento)  values (?,?)',[invento_idinvento, inventor_idinventor],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Detalle invento agregado'});
            } else{
                console.log(err);
            }
        });
        //res.json({message: 'Creando registro'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {invento_idinvento, inventor_idinvento}= req.body;
        const { id } = req.params;
        //console.log(id)
        var x = id.split("-");
        //console.log(x[0] + x[1])
        await pool.query('UPDATE Detalle_invento SET invento_idinvento = ?, inventor_idinventor= ? WHERE invento_idinvento = ? and inventor_idinventor = ?',[invento_idinvento, inventor_idinvento, x[0], x[1]],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Detalle invento actualizado'});
            } else{
                console.log(err);
            }
        
        });
        //res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        //console.log(id)
        var x = id.split("-");
        //console.log(x[0] + x[1])
        await pool.query('DELETE FROM Detalle_invento WHERE invento_idinvento = ? and inventor_idinventor = ?', [x[0], x[1]],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Respuesta correcta borrada'});
            } else{
                console.log(err);
            }
    
        });
        //res.json({text: 'Eliminando registro' });
        //res.json({text: 'Eliminando registro' + req.params.id});
    }

}

const route11controller = new  Route11controller();
export default route11controller;