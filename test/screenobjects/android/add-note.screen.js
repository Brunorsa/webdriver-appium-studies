class AddNoteScreen {
  get skipBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
  }

  get addNoteText() {
    return $('//*[@text="Add note"]');
  }

  get btnText() {
    return $('//*[@text="Text"]');
  }

  get textFielded() {
    return $('//*[@text="Editing"]');
  }

  get inputTitle() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
  }

  get inputTextBody() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
  }

  get editBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
  }

  get viewNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

export default new AddNoteScreen();
