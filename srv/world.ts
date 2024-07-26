import { Request } from '@cap-js/cds-types';

export class Say {
  hello(req: Request) {
    return `Hello ${req.data.to || 'Unknown'} from luck-system`;
  }

  sum(req: Request) {
    const { a, b } = req.data;
    return a + b;
  }
}

export class Luck {
  randomLuck(req: Request) {
    return Math.floor(Math.random() * 100);
  }
<<<<<<< HEAD
};

module.exports = class Test {
  teste(req:Request){
    return "oi" + req
  }
=======
>>>>>>> 1daf61bbb9028a391e03a6ddae7764cc7f0e33eb
}
