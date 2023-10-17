// Version 1

class Something implements Thing {
  public makeScaryNoise = () => 'Oooooo~~~~~~~~oooooo~~~~~';
}

interface Thing {
  makeScaryNoise: () => string;
}

async function main() {
  //
}

main();

/*
// Version 2

import { DemoEmailService } from './shared/shared';

async function main() {
  const emailService = new DemoEmailService();
  await emailService.send('sam.person@company.xyz');
}

main();
*/
