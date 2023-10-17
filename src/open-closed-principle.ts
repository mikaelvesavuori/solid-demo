import { DemoEmailService } from './shared';

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
  const emailService1 = new DemoEmailService();
  const address1 = 'sam.person.1@company.xyz';
  await emailService1.send(address1);

  const emailService2 = new OtherEmailService();
  const address2 = 'sam.person.2@company.xyz';
  await emailService2.send(address2);
})();
