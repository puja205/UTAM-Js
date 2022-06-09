const { baseMobileConfig } = require('./wdio.conf.shared');

exports.config = {
    ...baseMobileConfig,
    capabilities: [
        {
            platformName: 'iOS',
            'appium:autoWebview': true,
            'appium:deviceName': 'iPhone 12',
            'appium:app': '<path to iOS test app>',
            'appium:automationName': 'XCUITest',
            'appium:platformVersion': '15.2',
        },
    ],
};
