// const noteClass = require('./note.js');
let note = new Note();

let create = function() {
  let text = document.getElementById('text').value;
  console.log(text);
  note.create(text);
  console.log(note.all());
}
