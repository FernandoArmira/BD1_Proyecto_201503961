import {Request, Response} from 'express';

import pool from '../database';

class Route7controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Detalle_pregunta', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        //console.log(id)
        var x = id.split("-");
        //console.log(x[0] + x[1])
        await pool.query('SELECT * FROM Detalle_pregunta WHERE pregunta_idpregunta = ? and respuesta_idrespuesta = ?',[x[0], x[1]], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        const {pregunta_idpregunta, respuesta_idrespuesta}= req.body;
        //console.log(req.body);
        await pool.query('insert into Detalle_pregunta(pregunta_idpregunta, respuesta_idrespuesta)  values (?,?)',[pregunta_idpregunta, respuesta_idrespuesta],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Respuesta correcta agregada'});
            } else{
                console.log(err);
            }
        });
        //res.json({message: 'Creando registro'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {pregunta_idpregunta, respuesta_idrespuesta}= req.body;
        const { id } = req.params;
        //console.log(id)
        var x = id.split("-");
        //console.log(x[0] + x[1])
        await pool.query('UPDATE Detalle_pregunta SET pregunta_idpregunta = ?, respuesta_idrespuesta= ? WHERE pregunta_idpregunta = ? and respuesta_idrespuesta = ?',[pregunta_idpregunta, respuesta_idrespuesta, x[0], x[1]],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Respuesta correcta actualizada'});
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
        await pool.query('DELETE FROM Detalle_pregunta WHERE pregunta_idpregunta = ? and respuesta_idrespuesta = ?', [x[0], x[1]],(err,rows,fields)=>{
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

const route7controller = new  Route7controller();
export default route7controller;