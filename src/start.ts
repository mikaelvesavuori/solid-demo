// Requirements: Validate, send, log

const address = 'sam.person@company.xyz';
const [name, domain] = address.split('@');
const isValid = name && domain && name.length > 2 && domain.length > 2;

if (isValid) {
  const content = `Hello ${name}! Thanks for getting in touch. A customer sales agent will respond within 24 hours. Have a nice day!`;
  // Implement sending an email...
  console.log(`Sent email to ${address}: ${content}`);
} else {
  throw new Error('Invalid email address');
}
