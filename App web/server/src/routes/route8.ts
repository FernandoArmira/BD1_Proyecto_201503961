import { Router } from 'express';

import route8controller from '../controllers/route8controller';

class Route8 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route8controller.select);
        this.router.get('/:id', route8controller.selectone);
    }
}

const route8 = new Route8();
export default route8.router;