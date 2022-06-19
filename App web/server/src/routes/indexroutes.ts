import { Router } from 'express';

import { indexcontroller } from '../controllers/indexcontroller';

class Indexroutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexcontroller.index);
    }
}

const indexroutes = new Indexroutes();
export default indexroutes.router;