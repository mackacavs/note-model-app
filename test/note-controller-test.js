function noteControllerCanBeInstantiated() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController, nameOfFunc[1])
}

noteControllerCanBeInstantiated();

function loadNoteOnHashChangeEvent() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteController = new NoteController(new NoteList);
  noteController.add("This is a note that is more than 20 charaters")
  noteController.createNoteListView()
  noteController.render()
  setTimeout(2000);
  document.getElementsByTagName('a')[0].click();
  assert.isTrue(document.getElementById('app').innerHTML === "This is a note that is more than 20 charaters", nameOfFunc[1])
}

loadNoteOnHashChangeEvent();



