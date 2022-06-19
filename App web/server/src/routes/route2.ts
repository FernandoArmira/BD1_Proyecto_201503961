import { Router } from 'express';

import route2controller from '../controllers/route2controller';

class Route2 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route2controller.select);
        this.router.get('/:id', route2controller.selectone);
        this.router.post('/', route2controller.create);
        this.router.put('/:id', route2controller.update);
        this.router.delete('/:id', route2controller.delete);
    }
}

const route2 = new Route2();
export default route2.router;