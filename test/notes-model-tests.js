let note = new Note("My favourite language is JavaScript");

function checkNewNoteInstantiated() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  let expectation = "My favourite language is JavaScript";
  let actual = note.text
  assert.isTrue(actual === expectation, nameOfFunc[1]);
}
checkNewNoteInstantiated()

function checkReturnText() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  let expectation = "My favourite language is JavaScript";
  let actual = note.returnText()
  assert.isTrue(actual === expectation, nameOfFunc[1]);
}
checkReturnText()

function noteShouldHaveID() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  assert.isTrue(note.id === 1, nameOfFunc[1]);
}
noteShouldHaveID()

function notesShouldHaveUniqueIDs() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  let note2 = new Note("My favourite language is Ruby")

  assert.isTrue(note2.id !== note.id, nameOfFunc[1]);
}
notesShouldHaveUniqueIDs()


