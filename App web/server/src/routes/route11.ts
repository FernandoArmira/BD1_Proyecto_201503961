import { Router } from 'express';

import route11controller from '../controllers/route11controller';

class Route11 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route11controller.select);
        this.router.get('/:id', route11controller.selectone);
        this.router.post('/', route11controller.create);
        this.router.put('/:id', route11controller.update);
        this.router.delete('/:id', route11controller.delete);
    }
}

const route11 = new Route11();
export default route11.router;