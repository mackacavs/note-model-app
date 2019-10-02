
function returnsSingleNoteView() {
    nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
    singleNoteView = new SingleNoteView(new Note("This is my new note"))
    assert.isTrue(singleNoteView.returnsView() === `<ul><li><div>This is my new note</div></li></ul>`, nameOfFunc[1]);
  }
  
  returnsSingleNoteView();