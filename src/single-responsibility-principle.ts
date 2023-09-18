function validateEmailAddress(address: string) {
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

function send(address: string) {
  if (!validateEmailAddress(address)) throw new Error('Invalid email address');

  const content = `Hello ${name}! Thanks for getting in touch. A customer sales agent will respond within 24 hours. Have a nice day!`;
  log(`Sent email to ${address}: ${content}`);
}

function log(message: string) {
  console.log(message);
}

send('sam.person@company.xyz');
