var assert = {
  isTrue: function (assertionToCheck, nameOfFunc) {
    if (!assertionToCheck) {
      document.getElementById('test_errors')
        .insertAdjacentHTML('beforeend', `${nameOfFunc} has failed. <br/>`)
    }
  }
};
