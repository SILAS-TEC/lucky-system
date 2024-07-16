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
}
