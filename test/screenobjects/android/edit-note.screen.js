import AddNoteScreen from '../../screenobjects/android/add-note.screen.js'

class EditNoteScreen {
  get firstNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
  }

  get moreIcon() {
    return $('~More');
  }

  get deleteBtn() {
    return $('//*[@text="Delete"]');
  }

  get navIcon() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
  }

  get trashCanIcon() {
    return $('//*[@text="Trash Can"]');
  }

  get trashCanAssertion() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
  }

  async skipTutorial() {
    await AddNoteScreen.skipBtn.click()

    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  }

  async addAndSaveNote(noteheading, notebody) {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.btnText.click();
    await expect(AddNoteScreen.textFielded).toBeDisplayed();

    // add note title
    await AddNoteScreen.inputTitle.addValue(noteheading);

    // add note body
    await AddNoteScreen.inputTextBody.addValue(notebody);

    // save the change
    await AddNoteScreen.saveNote();

    // check assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText(notebody)
  }
}

export default new EditNoteScreen

