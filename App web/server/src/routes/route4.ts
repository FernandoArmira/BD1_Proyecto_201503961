import { Router } from 'express';

import route4controller from '../controllers/route4controller';

class Route4 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route4controller.select);
        this.router.get('/:id', route4controller.selectone);
    }
}

const route4 = new Route4();
export default route4.router;