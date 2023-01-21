describe('Android Native Feature Tests', () => {
  it('Acess an Activity directly', async () => {
    await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

    await driver.pause(3000);

    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it('Working with Dialog boxes', async () => {
    await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

    await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

    await $('//*[@resource-id="android:id/button1"]').click();

    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });

  it('Vertical scrolling', async () => {
    await $('~App').click();
    await $('~Activity').click();

    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
      .click();

    // await $('~Secure Surfaces').click();

    await expect($('~Secure Dialog')).toExist();
  });

  it('Horizontal scrolling', async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".view.Gallery1"
    );

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    await driver.pause(3000);
  });

  it.only('Acess the Date Widget', async () => {
    await $('~Views').click();
    await $('~Date Widgets').click();

    await $('//*[@content-desc="1. Dialog"]').click();

    const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    const currentDate = await date.getText();

    await $('~change the date').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    await $('//*[@text="10"]').click();

    await $('//*[@resource-id="android:id/button1"]').click();

    await expect(await date.getText()).not.toEqual(currentDate);
  });
});