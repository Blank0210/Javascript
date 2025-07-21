const accountId = '12345';
const accountName = 'JohnDoe';

// Prefer not to use var due to its function scope and potential for hoisting issues.
// Using let for variables that may change in the future.
let accountEmail = 'adhavidh02@gmail.com';
let accountBalance = 1000.50;

accountEmail = "devika17@gmail.com";

console.log(`Account ID: ${accountId}`);

console.table([accountId, accountName, accountEmail, accountBalance]);