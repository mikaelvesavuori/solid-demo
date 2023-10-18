import { DemoEmailService } from './shared';

/**
 * The OtherEmailService demonstrates the LSP by making a subclass that is interchangeable with the superclass.
 * The new functionality is added to the subclass, but the superclass remains unchanged.
 */
class OtherEmailService extends DemoEmailService {
  reformatMessage() {
    // Do something to the message before sending
  }
}

(async () => {
  const emailService = new OtherEmailService();
  emailService.reformatMessage();
  await emailService.send('sam.person@company.xyz');
})();
