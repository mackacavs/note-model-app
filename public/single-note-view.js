(function (exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.returnsView = function () {
    output = `<div>${this.note.text}</div>`
    return output
  }

  exports.SingleNoteView = SingleNoteView
})(this)