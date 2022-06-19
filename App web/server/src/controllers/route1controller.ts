import {Request, Response} from 'express';

import pool from '../database';

class Route1controller{

    public async select (req: Request, res: Response) {
        const { id } = req.params;

        var x = id;
        var y: number = +x;

        if (y == 1){
            await pool.query('SELECT * FROM Consulta1', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 2){
            await pool.query('SELECT * FROM Consulta2', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 3){
            await pool.query('SELECT * FROM Consulta3', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 4){
            await pool.query('SELECT * FROM Consulta4', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 5){
            await pool.query('SELECT * FROM Consulta5', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 6){
            await pool.query('SELECT * FROM Consulta6', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 7){
            await pool.query('SELECT * FROM Consulta7', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 8){
            await pool.query('SELECT * FROM Consulta8', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 9){
            await pool.query('SELECT * FROM Consulta9', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 10){
            await pool.query('SELECT * FROM Consulta10', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 11){
            await pool.query('SELECT * FROM Consulta11', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 12){
            await pool.query('SELECT * FROM Consulta12', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 13){
            await pool.query('SELECT * FROM Consulta13', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 14){
            await pool.query('SELECT * FROM Consulta14', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 15){
            await pool.query('SELECT * FROM Consulta15', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 16){
            await pool.query('SELECT * FROM Consulta16', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 17){
            await pool.query('SELECT * FROM Consulta17', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 18){
            await pool.query('SELECT * FROM Consulta18', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 19){
            await pool.query('SELECT * FROM Consulta19', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }
        else if (y == 20){
            await pool.query('SELECT * FROM Consulta20', function(err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
        }

        
    }

    /*public async selectone (req: Request, res: Response): Promise<any> {
        //pool.query('DESCRIBE Region');
        //res.json('Ruta 1 ');
        //res.send('Ruta 1')
        const {id} = req.params;
        const registro = await pool.query('SELECT * FROM Region WHERE idregion = ?', [id]);
        if (registro.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({text: "No existe el registro"});
        //console.log(registro);
        //res.json({text: 'Mostrando registro' + req.params.id});
    }*/

    public async selectone (req: Request, res: Response) { // CORREGIR
        await pool.query('SELECT * FROM Region WHERE idregion = ?', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        //console.log(req.body);
        await pool.query('insert into region set ?',[req.body])
        res.json({message: 'Creando registro'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE Region SET ? WHERE idregion = ?',[req.body, id]);
        res.json({text: 'Actualizando registro'});
        //res.json({text: 'Actualizando registro' + req.params.id});

    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM Region WHERE idregion = ?', [id]);
        res.json({text: 'Eliminando registro' });
        //res.json({text: 'Eliminando registro' + req.params.id});
    }

}

const route1controller = new  Route1controller();
export default route1controller;