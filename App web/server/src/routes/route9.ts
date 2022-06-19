import { Router } from 'express';

import route9controller from '../controllers/route9controller';

class Route9 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route9controller.select);
        this.router.get('/:id', route9controller.selectone);
        this.router.put('/:id', route9controller.update);

    }
}

const route9 = new Route9();
export default route9.router;