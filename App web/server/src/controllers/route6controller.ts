import {Request, Response} from 'express';

import pool from '../database';

class Route6controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Respuesta', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT * FROM Respuesta WHERE idrespuesta = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        const {respuesta, letra, pregunta_idpregunta}= req.body;
        //console.log(req.body);
        await pool.query('insert into Respuesta(respuesta, letra, pregunta_idpregunta)  values (?,?,?)',[respuesta, letra, pregunta_idpregunta],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Respuesta agregada'});
            } else{
                console.log(err);
            }
        });
        //res.json({message: 'Creando registro'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {respuesta, letra, pregunta_idpregunta}= req.body;
        const { id } = req.params;
        await pool.query('UPDATE Respuesta SET respuesta = ?, letra= ?, pregunta_idpregunta = ? WHERE idrespuesta = ?',[respuesta, letra, pregunta_idpregunta, id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Respuesta actualizada'});
            } else{
                console.log(err);
            }
        
        });
        //res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM Respuesta WHERE idrespuesta = ?', [id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Respuesta borrada'});
            } else{
                console.log(err);
            }
    
        });
        //res.json({text: 'Eliminando registro' });
        //res.json({text: 'Eliminando registro' + req.params.id});
    }

}

const route6controller = new  Route6controller();
export default route6controller;