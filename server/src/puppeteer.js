const puppeteer = require("puppeteer");

const testCreateUserButton = async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.click(".create-user");

  await page.screenshot({
    path: "./puppeteer2.png",
    type: "png",
    fullPage: true,
  });
};

module.exports = testCreateUserButton;
