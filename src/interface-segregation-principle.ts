// General demo

interface Thing {
  makeNoise: () => void;
}

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

async function demo() {
  const scary = new SomethingScary();
  const cute = new SomethingCute();

  scary.makeNoise();
  cute.makeNoise();
}

demo();

// Interface Segregation Principle for the email

import { DemoEmailService } from './shared';

async function email() {
  const emailService = new DemoEmailService();
  await emailService.send('sam.person@company.xyz');
}

email();
