import EditNoteScreen from "../../screenobjects/android/edit-note.screen.js";

describe('Add Notes', () => {
  it('Delete a note & check the note in trash can', async () => {
    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.addAndSaveNote('TV Shows', 'Friends\nBreakingBad\nPeakBlinders');

    await driver.back();

    const note = await EditNoteScreen.firstNote.getText();

    // click on the note
    await EditNoteScreen.firstNote.click();

    // click on more icon
    await EditNoteScreen.moreIcon.click();

    // click on Delete item
    await EditNoteScreen.deleteBtn.click();

    // accept alert
    await driver.acceptAlert();

    // click on nav icon
    await EditNoteScreen.navIcon.click();

    // click on Trash can icon
    await EditNoteScreen.trashCanIcon.click();

    // assertion
    const trashCanItem = await EditNoteScreen.trashCanAssertion.getText();

    await expect(trashCanItem).toEqual(note);
  });
})