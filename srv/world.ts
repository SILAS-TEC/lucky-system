import { Request } from '@cap-js/cds-types';

module.exports = class Say {
  hello(req: Request) {
    return `Hello ${req.data.to || 'Unknown'} from luck-system`;
  }

  sum(req: Request) {
    const { a, b } = req.data;
    return a + b;
  }
};

module.exports = class Luck {
  randomLuck(req: Request) {
    return Math.floor(Math.random() * 100);
  }
};

module.exports = class Test {
  teste(req:Request){
    return "oi" + req
  }
}
