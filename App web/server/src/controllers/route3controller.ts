import {Request, Response} from 'express';

import pool from '../database';

class Route3controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Frontera', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT * FROM Frontera WHERE pais_idpais = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        const {norte, sur, este, oeste, pais_idpais, pais_idpais1}= req.body;
        //console.log(req.body);
        await pool.query('insert into Frontera(norte, sur, este, oeste, pais_idpais, pais_idpais1)  values (?,?,?,?,?,?)',[norte, sur, este, oeste, pais_idpais, pais_idpais1],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Frontera agregada'});
            } else{
                console.log(err);
            }
        });
        //res.json({message: 'Creando registro'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {norte, sur, este, oeste, pais_idpais1}= req.body;
        const { id } = req.params;
        await pool.query('UPDATE Frontera SET norte = ?, sur= ?, este = ?, oeste = ?, pais_idpais1= ? WHERE pais_idpais = ?',[norte, sur, este, oeste, pais_idpais1, id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Frontera actualizada'});
            } else{
                console.log(err);
            }
        
        });
        //res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM Frontera WHERE pais_idpais = ?', [id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Frontera borrada'});
            } else{
                console.log(err);
            }
    
        });
        //res.json({text: 'Eliminando registro' });
        //res.json({text: 'Eliminando registro' + req.params.id});
    }

}

const route3controller = new  Route3controller();
export default route3controller;