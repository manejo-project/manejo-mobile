exports.config = {
  specs: [
    './src/tests/e2e/*.js'
  ],
  exclude: [],
  services: ['appium'],
  port: 4723,
  capabilities: [{
    maxInstances: 1,
    browserName: '',
    appiumVersion: '1.21.0',
    platformName: "Android",
    platformVersion: "9",
    deviceName: 'emulator-5554',
    app: '/home/bruna/Documentos/IC/manejomobile/android/app/build/outputs/apk/debug/app-debug.apk',
    appPackage: "com.manejomobile",
    appActivity: ".MainActivity",
    automationName: "UiAutomator1"
  }],
  sync: true,
  logLevel: 'trace',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './errorShots/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
    expectationResultHandler: function (passed, assertion) {
    }
  }
}
