import AddNoteScreen from '../../screenobjects/android/add-note.screen.js';

describe('Add Notes', () => {
  it('Skip tutorial', async () => {
    await AddNoteScreen.skipBtn.click()

    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  });
  it('add a note, save changes & verify note', async () => {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.btnText.click();
    await expect(AddNoteScreen.textFielded).toBeDisplayed();

    // add note title
    await AddNoteScreen.inputTitle.addValue("Fav Anime list");

    // add note body
    await AddNoteScreen.inputTextBody.addValue("Naruto\nOnePiece\nAOT");

    // save the change
    await AddNoteScreen.saveNote();

    // check assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT")
  });
  it('Delete a note & check the note in trash can', async () => {

  });
})