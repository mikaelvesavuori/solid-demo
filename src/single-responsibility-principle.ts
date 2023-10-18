send('sam.person@company.xyz');

// Orchestrates a "use case"
function send(address: string) {
  if (!validateEmailAddress(address)) throw new Error('Invalid email address');

  const name = splitEmail(address).name;
  const message = config(name).messageTemplate;

  // Implement sending the message...

  log(message);
}

const config = (name: string) => ({
  messageTemplate: `Hello ${name}! Thanks for getting in touch. A customer sales agent will respond within 24 hours. Have a nice day!`
});

function splitEmail(address: string) {
  const [name, domain] = address.split('@');
  const tld = address.split('.').pop();

  return {
    name,
    domain,
    tld
  };
}

function validateEmailAddress(address: string) {
  const { name, domain, tld } = splitEmail(address);

  return (
    name &&
    name.length > 2 &&
    domain &&
    domain.length > 2 &&
    tld &&
    tld.length > 2
  );
}

function log(message: string) {
  console.log(`Sent email: "${message}"`);
}
