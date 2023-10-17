import { EmailService } from './shared';

/**
 * The OtherEmailService demonstrates the LSP by being a narrow, yet valid, subset of the superclass.
 */
class OtherEmailService implements EmailService {
  public async send(address: string): Promise<void> {
    if (!address) throw new Error('Invalid email address');

    console.log('Sending email to:', address);
  }
}

(async () => {
  const emailService = new OtherEmailService();
  await emailService.send('sam.person@company.xyz');
})();
