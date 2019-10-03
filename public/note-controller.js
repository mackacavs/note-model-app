(function (exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.add = function (text) {
    this.noteList.list.push(text);
  };

  NoteController.prototype.createNoteListView = function () {
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.render = function () {
    document.getElementById('app').innerHTML = this.noteListView.returnsView();
  };

  exports.NoteController = NoteController;
})(this);