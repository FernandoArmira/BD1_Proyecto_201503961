import {Request, Response} from 'express';

import pool from '../database';

class Route5controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Pregunta', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT * FROM Pregunta WHERE idpregunta = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        const {pregunta, encuesta_idencuesta}= req.body;
        //console.log(req.body);
        await pool.query('insert into Pregunta(pregunta, encuesta_idencuesta)  values (?,?)',[pregunta, encuesta_idencuesta],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Pregunta agregada'});
            } else{
                console.log(err);
            }
        });
        //res.json({message: 'Creando registro'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {pregunta, encuesta_idencuesta}= req.body;
        const { id } = req.params;
        await pool.query('UPDATE Pregunta SET pregunta = ?, encuesta_idencuesta= ? WHERE idpregunta = ?',[pregunta, encuesta_idencuesta, id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Pregunta actualizada'});
            } else{
                console.log(err);
            }
        
        });
        //res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM Pregunta WHERE idpregunta = ?', [id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Pregunta borrada'});
            } else{
                console.log(err);
            }
    
        });
        //res.json({text: 'Eliminando registro' });
        //res.json({text: 'Eliminando registro' + req.params.id});
    }

}

const route5controller = new  Route5controller();
export default route5controller;