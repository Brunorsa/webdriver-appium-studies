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
  // './test/specs/android/add-note-screen*.js'
  '../test/specs/android/delete-note-screen.spec.js'
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

const _config = config;
export { _config as config };