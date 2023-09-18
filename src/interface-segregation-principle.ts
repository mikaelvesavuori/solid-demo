// First run this, then use the commented lines and remove the Something + Thing combo

//import { DemoEmailService } from './base';

class Something implements Thing {
  public makeScaryNoise = () => 'Oooooo~~~~~~~~oooooo~~~~~';
}

interface Thing {
  makeScaryNoise: () => string;
}

(async () => {
  //const emailService = new DemoEmailService();
  //await emailService.send('sam.person@company.xyz');
})();
