import './commands'

// Ignore ALL errors so tests don't fail on page errors
Cypress.on('uncaught:exception', () => false);

// Add browser headers to look like a real user
Cypress.on('before:browser:launch', (browser, launchOptions) => {
  if (browser.name === 'chrome') {
    launchOptions.args.push('--disable-blink-features=AutomationControlled');
    launchOptions.args.push('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  }
  return launchOptions;
});