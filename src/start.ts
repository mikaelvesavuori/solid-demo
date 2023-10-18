/*
 * Requirements:
 * 1. Validate (and handle errors)
 * 2. Send
 * 3. Log
 */

// An example of your everyday, bog-standard one-file "dirty" implementation.

function main() {
  const address = 'sam.person@company.xyz';
  const [name, domain] = address.split('@');
  const isValid = name && domain && name.length > 2 && domain.length > 2;

  if (isValid) {
    const content = `Hello! Thanks for getting in touch. A customer sales agent will respond within 24 hours. Have a nice day!`;
    // Implement sending an email...
    // emailLibrary.sendEmail(addr, content);
    console.log(`Sent email to ${address}: ${content}`);
  } else {
    throw new Error('Bad address');
  }
}

main();
