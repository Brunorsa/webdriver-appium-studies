import path from 'path';
import { config } from './wdio.shared.conf.js';

// Runner Configuration
// ====================
// WebdriverIO supports running e2e tests as well as unit and component tests.
config.runner = 'local';
config.port = 4723;

// ==================
// Specify Test Files
// ==================
config.specs = [
  '../test/specs/android/delete-note-screen*.js'
];
// ===========
// Capabilities
// ============
config.capabilities = [
  {
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 5',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    'appium:autoGrantPermissions': true
  }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

const _config = config;
export { _config as config };