import { DemoEmailService } from './base';

class OtherEmailService extends DemoEmailService {
  public async send(address: string) {
    // Do something before...
    await super.send(address);
    // Do something after...
  }

  public emailHtml() {
    return `<h1>Hello World!</h1>`;
  }
}

(async () => {
  const emailService = new DemoEmailService();
  const emailService2 = new OtherEmailService();
  const address = 'sam.person@company.xyz';
  await emailService.send(address);
  await emailService2.send(address);
})();
