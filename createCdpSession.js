// Node.js version: 8.9.4
const puppeteer = require('puppeteer'); // version 1.0.0

(async () => {
  // Prevent Puppeteer from showing the "Chrome is being controlled by automated test
  // software" prompt, but otherwise use Puppeteer's default args.
  const args = await puppeteer.defaultArgs().filter(flag => flag !== '--enable-automation');
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: true,
    args
  });
  const page = await browser.newPage();
  const devtoolsProtocolClient = await page.target().createCDPSession();
  await devtoolsProtocolClient.send('Overlay.setShowFPSCounter', { show: true });
  await page.goto('https://developers.google.com/web/tools/chrome-devtools');
})();
