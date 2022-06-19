import { Router } from 'express';

import route1controller from '../controllers/route1controller';

class Route1 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:id', route1controller.select);
        this.router.get('/:id', route1controller.selectone);
        this.router.post('/', route1controller.create);
        this.router.put('/:id', route1controller.update);
        this.router.delete('/:id', route1controller.delete);
    }
}

const route1 = new Route1();
export default route1.router;