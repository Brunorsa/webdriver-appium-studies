describe('Android Elements Tests', () => {
  it('Find element by accessibility id', async () => {
    // find element by accebility id
    const appOption = await $('~App');

    // click on element
    await appOption.click();

    // assertion

    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();
  });

  it('Find element by class name', async () => {
    const className = await $('android.widget.TextView');

    console.log(await className.getText());
  });

  it('Find elements by Xpath', async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

    await $('//android.widget.TextView[@text="Command two"]').click();

    const textAssertion = await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText('You selected: 1 , Command two');
  });

  it('Find multiple elements', async () => {
    const expectList = [
      'API Demos', "Access'ibility",
      'Accessibility', 'Animation',
      'App', 'Content',
      'Graphics', 'Media',
      'NFC', 'OS',
      'Preference', 'Text',
      'Views'
    ]
    const actualList = []

    const textList = await $$('android.widget.TextView');

    for (const element of textList) {
      actualList.push(await element.getText());
    }

    await expect(actualList).toEqual(expectList);
  });

  it.only('Working with text field', async () => {
    await $('~Views').click();
    await $('//*[@text="Auto Complete"]').click();
    await $('//*[@content-desc="1. Screen Top"]').click();

    const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await textField.addValue('Canada');

    await expect(textField).toHaveText('Canada');
  });
}); 