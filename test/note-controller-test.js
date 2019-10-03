function noteControllerCanBeInstantiated() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController, nameOfFunc[1])
}

noteControllerCanBeInstantiated();

function loadNoteOnHashChangeEvent() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  document.getElementsByTagName('a')[0].click()
  function assertion() {
    assert.isTrue(document.getElementById('app').innerHTML === "<div>This is my note that is long</div>", nameOfFunc[1])
  }
  setTimeout(assertion, 2000)
}

setTimeout(loadNoteOnHashChangeEvent, 500)



