import { Router } from 'express';

import route7controller from '../controllers/route7controller';

class Route7 {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', route7controller.select);
        this.router.get('/:id', route7controller.selectone);
        this.router.post('/', route7controller.create);
        this.router.put('/:id', route7controller.update);
        this.router.delete('/:id', route7controller.delete);
    }
}

const route7 = new Route7();
export default route7.router;