import { Router } from 'express';

import route5controller from '../controllers/route5controller';

class Route5 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route5controller.select);
        this.router.get('/:id', route5controller.selectone);
        this.router.post('/', route5controller.create);
        this.router.put('/:id', route5controller.update);
        this.router.delete('/:id', route5controller.delete);
    }
}

const route5 = new Route5();
export default route5.router;