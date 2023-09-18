export class DemoEmailService implements EmailService {
  messageTemplate = `Hello __ADDRESS__! Thanks for getting in touch. A customer sales agent will respond within 24 hours. Have a nice day!`;

  public validateEmailAddress(address: string) {
    const [name, domain] = address.split('@');
    const tld = address.split('.').pop();
    return (
      name &&
      name.length > 2 &&
      domain &&
      domain.length > 2 &&
      tld &&
      tld.length > 2
    );
  }

  public async send(address: string) {
    if (!this.validateEmailAddress(address))
      throw new Error('Invalid email address');

    const content = this.messageTemplate.replace('__ADDRESS__', address);

    console.log(`Sent email to ${address}`);
    console.log(content);

    // Implement sending the message...
  }
}

export interface EmailService {
  send(address: string): Promise<void>;
}

export interface EmailProvider {
  send(address: string, content: string): Promise<void>;
}
