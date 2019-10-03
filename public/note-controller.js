(function (exports) {
  function NoteController(noteList) {
    this.noteList = noteList
  }

  NoteController.prototype.add = function (text) {
    this.noteList.createNote(text)
  }

  NoteController.prototype.createNoteListView = function () {
    this.noteListView = new NoteListView(this.noteList)
    console.log(this.noteListView)
  }

  NoteController.prototype.render = function () {
    console.log(this.noteListView)
    document.getElementById('app').innerHTML = this.noteListView.returnsView()
  }

  NoteController.prototype.makeURLChangeShowNoteForCurrentPage = function () {
    console.log('Hello')
    window.addEventListener("hashchange", showNoteForCurrentPage)
  }

  function showNoteForCurrentPage() {
    console.log("showNote")
    showNote(getNoteFromURL(window.location));
  }

  function getNoteFromURL(location) {
    console.log('getNote')
    return location.hash.split('/').pop()
  }

  function showNote(noteId) {

    let note = controller.noteList.listOfNotes()[noteId]
    console.log(note)
    let view = new SingleNoteView(note)
    console.log(view)

    document.getElementById('app').innerHTML = view.returnsView();
  }

  exports.NoteController = NoteController
})(this);

controller = new NoteController(new NoteList());
controller.makeURLChangeShowNoteForCurrentPage()
controller.createNoteListView()
controller.add("This is my note that is long")
controller.render()

