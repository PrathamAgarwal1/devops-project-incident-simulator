if (!process.env.RUN_SELENIUM) {
    describe('UI Selenium Test', () => {
        test('Selenium test skipped (RUN_SELENIUM not set)', () => {
            console.log('Skipping Selenium test.');
        });
    });
} else {
    const { Builder, By } = require('selenium-webdriver');
    const chrome = require('selenium-webdriver/chrome');

    describe('UI Selenium Test', () => {
        let driver;

        beforeAll(async () => {
            const options = new chrome.Options();
            options.addArguments('--headless');
            options.addArguments('--no-sandbox');
            options.addArguments('--disable-dev-shm-usage');

            driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(options)
                .build();

            await driver.get('http://localhost:8080');
        }, 30000);

        afterAll(async () => {
            if (driver) {
                await driver.quit();
            }
        });

        test('Homepage loads correctly', async () => {
            const title = await driver.getTitle();
            expect(title).toContain('DevOps Incident Management Simulator');
        }, 30000);
    });
}