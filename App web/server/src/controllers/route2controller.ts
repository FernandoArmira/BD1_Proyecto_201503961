import {Request, Response} from 'express';

import pool from '../database';

class Route2controller{

    public async select (req: Request, res: Response) {

        await pool.query('SELECT * FROM Pais', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async selectone (req: Request, res: Response) { // CORREGIR
        const { id } = req.params;
        await pool.query('SELECT Nombre, Poblacion, Area, Capital,  Region_idRegion FROM Pais WHERE idpais = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        const {nombre, poblacion, area, capital, region_idregion}= req.body;
        //console.log(req.body);
        await pool.query('insert into Pais(nombre, poblacion, area, capital, region_idregion)  values (?,?,?,?,?)',[nombre, poblacion, area, capital, region_idregion],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Pais agregado'});
            } else{
                console.log(err);
            }
        });
        //res.json({message: 'Creando registro'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {nombre, poblacion, area, capital, region_idregion}= req.body;
        const { id } = req.params;
        await pool.query('UPDATE Pais SET nombre = ?, poblacion= ?, area = ?, capital = ?, region_idregion = ? WHERE idpais = ?',[nombre,poblacion,area,capital, region_idregion, id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Pais actualizado'});
            } else{
                console.log(err);
            }
        
        });
        //res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM Pais WHERE idpais = ?', [id],(err,rows,fields)=>{
            if(!err){
                res.json({Status: 'Pais borrado'});
            } else{
                console.log(err);
            }
    
        });
        //res.json({text: 'Eliminando registro' });
        //res.json({text: 'Eliminando registro' + req.params.id});
    }

}

const route2controller = new  Route2controller();
export default route2controller;