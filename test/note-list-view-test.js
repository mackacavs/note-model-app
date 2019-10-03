function returnsListOfNotes() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteList = new NoteList();
  noteList.createNote("This is my new note - remember to water the plants")
  noteList.createNote("This is the second note - remember to feed the dog and cat")
  noteListView = new NoteListView(noteList)
  firstNoteIndex = noteList.listOfNotes()[0].id
  secondNoteIndex = noteList.listOfNotes()[1].id
  console.log(noteListView.returnsView())
  console.log(`<ul><li><div><a href="#notes/${firstNoteIndex}">This is my new ndote ...</a></div></li><li><div><a href="#notes/${secondNoteIndex}>This is the second n...</a></div></li></ul>`)
  assert.isTrue(noteListView.returnsView() === `<ul><li><div><a href="#notes/${firstNoteIndex}">This is my new note ...</a></div></li><li><div><a href="#notes/${secondNoteIndex}">This is the second n...</a></div></li></ul>`, nameOfFunc[1])
}

returnsListOfNotes();
