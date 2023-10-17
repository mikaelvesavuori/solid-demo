const config = (name: string) => ({
  messageTemplate: `Hello ${name}! Thanks for getting in touch. A customer sales agent will respond within 24 hours. Have a nice day!`
});

export class DemoEmailService implements EmailService {
  public validateEmailAddress(address: string) {
    const { name, domain, tld } = this.splitEmail(address);

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

    const name = this.splitEmail(address).name;
    const message = config(name).messageTemplate;

    // Implement sending the message...

    this.log(message);
  }

  private splitEmail(address: string) {
    const [name, domain] = address.split('@');
    const tld = address.split('.').pop();

    return {
      name,
      domain,
      tld
    };
  }

  private log(message: string) {
    console.log(`Sent email: "${message}"`);
  }
}

export interface EmailService {
  send(address: string): Promise<void>;
}

export interface EmailProvider {
  send(address: string, content: string): Promise<void>;
}
