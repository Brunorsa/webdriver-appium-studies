import 'dotenv/config';
import { config } from './wdio.shared.conf.js';

// ==================
// BrowserStack Credentials
// ==================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

// ==================
// Specify Test Files
// ==================
config.specs = [
  // './test/specs/android/add-note-screen*.js'
  '../test/specs/android/delete-note-screen.spec.js'
];
// ===========
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Google Pixel 5',
    'appium:automationName': 'UIAutomator2',
    'appium:app': 'bs://0e8495def4d01c12a5c664891ac1dfa4ff024547',
    'appium:autoGrantPermissions': true
  }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

const _config = config;
export { _config as config };