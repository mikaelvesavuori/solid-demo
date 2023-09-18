import { EmailService } from './base';

class OtherEmailService implements EmailService {
  private validateEmailAddress(address: string) {
    const validDomains = ['example.com', 'example.org'];
    const [name, domain] = address.split('@');
    const tld = address.split('.').pop();
    return (
      name &&
      name.length > 2 &&
      domain &&
      domain.length > 2 &&
      tld &&
      tld.length > 2 &&
      validDomains.includes(tld)
    );
  }

  public async send(address: string): Promise<void> {
    if (!this.validateEmailAddress(address)) {
      throw new Error('Invalid email address');
    }

    console.log('Sending email to:', address);
  }
}

(async () => {
  const emailService = new OtherEmailService();
  await emailService.send('sam.person@company.xyz');
})();
