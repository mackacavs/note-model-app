(function (exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.listOfNotes = function () {
    return this.list
  }

  NoteList.prototype.createNote = function (text) {
    this.list.push(new Note(text))
  }

  exports.NoteList = NoteList;
})(this);
