import { Router } from 'express';

import route3controller from '../controllers/route3controller';

class Route3 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route3controller.select);
        this.router.get('/:id', route3controller.selectone);
        this.router.post('/', route3controller.create);
        this.router.put('/:id', route3controller.update);
        this.router.delete('/:id', route3controller.delete);
    }
}

const route3 = new Route3();
export default route3.router;