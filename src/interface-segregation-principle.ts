// Version 1

class SomethingScary implements Thing {
  public makeNoise() {
    console.log('Boooooo~~~~~~~~oooooo~~~~~ 👻');
  }
}

class SomethingCute implements Thing {
  public makeNoise() {
    console.log('Meooo~~~~~~~~www~~~~ 🐈');
  }
}

interface Thing {
  makeNoise: () => void;
}

async function main() {
  const scary = new SomethingScary();
  const cute = new SomethingCute();

  scary.makeNoise();
  cute.makeNoise();
}

main();

/*
// Version 2

import { DemoEmailService } from './shared';

async function main() {
  const emailService = new DemoEmailService();
  await emailService.send('sam.person@company.xyz');
}

main();
*/
