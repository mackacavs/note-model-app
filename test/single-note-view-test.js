
function returnsSingleNoteView() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  singleNoteView = new SingleNoteView(new Note("This is my new note"))
  assert.isTrue(singleNoteView.returnsView() === `<div>This is my new note</div>`, nameOfFunc[1]);
}

returnsSingleNoteView();