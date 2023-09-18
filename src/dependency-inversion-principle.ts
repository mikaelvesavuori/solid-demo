import { EmailService } from './base';

class EmailProvider {
  async send(address: string, content: string) {
    console.log(
      `PROVIDER: Sending email to ${address} with content: ${content}`
    );
  }
}

class EmailServiceWithProvider implements EmailService {
  emailProvider: EmailProvider;

  constructor(emailProvider: EmailProvider) {
    this.emailProvider = emailProvider;
  }

  public async send(address: string) {
    const content = 'Sent using a custom, dependency-injected provider';
    await this.emailProvider.send(address, content);
  }
}

(async () => {
  const provider = new EmailProvider();
  const emailService = new EmailServiceWithProvider(provider);
  await emailService.send('sam.person@company.xyz');
})();
