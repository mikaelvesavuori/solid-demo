/*
 * Requirements:
 * 1. Validate
 * 2. Send
 * 3. Log
 */

const addr = 'sam.person@company.xyz';
const [n, d] = addr.split('@');
const ok = n && d && n.length > 2 && d.length > 2;

if (ok) {
  const content = `Hello! Thanks for getting in touch. A customer sales agent will respond within 24 hours. Have a nice day!`;
  // Implement sending an email...
  console.log(`Sent email to ${addr}: ${content}`);
} else {
  throw new Error('Bad address');
}
