describe('Web Browser Acess', () => {
  before(async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
      .click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });
  it('Access external link and verify content in the browser ', async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
      .click();

    //click on facebook link
    await $('//*[@text="Like us on Facebook"]').click()

    // get all the contexts
    await driver.getContexts()

    // switch to webview chrome context
    await driver.switchContext('WEBVIEW_chrome')

    // assert the cover image is displayed
    const modalLogin = await $('//*[@text="See more from ColorNote"]');
    await expect(modalLogin).toBeDisplayed()

    // switch to native app
    await driver.switchContext('NATIVE_APP');
    await driver.back();

    // continue with the app stuff
    await $('//*[@text="Notes"]').click();
    const addNoteText = await $('//*[@text="Add note"]');
    await expect(addNoteText).toBeDisplayed();
  });
}) 