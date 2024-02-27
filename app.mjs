import puppeteer from 'puppeteer-core'

export const browser = await puppeteer.connect({
  // browserWSEndpoint: "ws://0.0.0.0:21222/devtools/browser/b5c74c1e-1cb7-4dad-bf8d-dd43ba782fea"
  browserWSEndpoint: process.argv[2] ?? process.env.CHROME_WS_ENDPOINT
})

const page = (await browser.pages())[0] ?? await browser.newPage()
await page.setViewport({ width: 1920, height: 1080 })
await page.goto('https://pros.com')
await page.waitForSelector('body')
await page.screenshot({ path: 'pros.png' })
await page.close()
browser.disconnect()