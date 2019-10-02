function noteListHasTwoNotes() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  note1 = new Note("This is note 1");
  note2 = new Note("This note 2");
  noteList = new NoteList();
  noteList.list.push(note1, note2);
  assert.isTrue(noteList.listOfNotes() === noteList.list, nameOfFunc[1])
}

noteListHasTwoNotes();

function newNoteCreatedAndStored() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  noteList = new NoteList();
  noteList.createNote("This is my new note")
  assert.isTrue(noteList.list[0].text === "This is my new note", nameOfFunc[1])

}

newNoteCreatedAndStored();
