import { Router } from 'express';

import route6controller from '../controllers/route6controller';

class Route6 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route6controller.select);
        this.router.get('/:id', route6controller.selectone);
        this.router.post('/', route6controller.create);
        this.router.put('/:id', route6controller.update);
        this.router.delete('/:id', route6controller.delete);
    }
}

const route6 = new Route6();
export default route6.router;