function noteControllerCanBeInstantiated() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController, nameOfFunc[1])
}

noteControllerCanBeInstantiated();

