function returnsListOfNotes() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteList = new NoteList();
  noteList.createNote("This is my new note")
  noteList.createNote("This is the second note")
  noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.returnsView() === `<ul><li><div>This is my new note</div></li><li><div>This is the second note</div></li></ul>`, nameOfFunc[1])
}

returnsListOfNotes();
