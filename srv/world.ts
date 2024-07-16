import { Request } from '@sap/cds';

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
