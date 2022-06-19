import {Request, Response} from 'express';

class Indexcontroller{
    public index (req: Request, res: Response){
        res.json({text: 'Proyecto 2'});
    }
}

export const indexcontroller = new  Indexcontroller();