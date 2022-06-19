import { Router } from 'express';

import route10controller from '../controllers/route10controller';

class Route10 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route10controller.select);
        this.router.get('/:id', route10controller.selectone);
        this.router.put('/:id', route10controller.update);

    }
}

const route10 = new Route10();
export default route10.router;