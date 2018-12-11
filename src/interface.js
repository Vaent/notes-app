// const noteClass = require('./note.js');
let note = new Note();

let create = function() {
  let text = document.getElementById('text').value;
  console.log(text);
  note.create(text);
  console.log(note.all());
  display_notes();
  document.getElementById('text').value = "";
}

let display_notes = function() {
	let displayed = note.all();
	let html_text = document.getElementById('note-list');
	html_text.innerHTML = "";
	displayed.forEach(function (element) {
		html_text.innerHTML += "<li>" + note.abbreviate(element) + "</li>";
	});
}
