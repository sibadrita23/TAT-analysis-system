touch rpa_scripts/login.js
const puppeteer = require('puppeteer');

async function login(url, username, password) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(url);
  
  await page.type('#username', username);
  await page.type('#password', password);
  await page.click('#login-button');
  
  await browser.close();
}

module.exports = login;
