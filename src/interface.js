// const noteClass = require('./note.js');
let note = new Note();

let create = function() {
  let text = document.getElementById('text').value;

  note.create(text);
  display_notes();
  document.getElementById('text').value = "";
}

let display_notes = function() {
	let displayed = note.all();
	let html_text = document.getElementById('note-list');
  html_text.innerHTML = "";
  
  for (let i = 0; i < displayed.length; i++){
		html_text.innerHTML += "<a href='#" + i + "'>" + note.abbreviate(displayed[i]) + "</a><br/>";
  };

}
