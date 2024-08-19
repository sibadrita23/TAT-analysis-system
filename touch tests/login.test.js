mkdir tests
touch tests/login.test.js
const login = require('../rpa_scripts/login');

jest.mock('puppeteer');

describe('Login Script', () => {
  it('should login successfully', async () => {
    // Implement your test here
  });
});
