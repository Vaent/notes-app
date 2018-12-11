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

let showNoteByItself = function(){
  note_div = document.getElementById('single-note');
  note_text = note.all()[getNoteIndex(window.location)];
  note_div.innerHTML = note_text;
  note_div.removeAttribute('hidden');
  main_div = document.getElementById('main-screen');
  main_div.hidden='hidden';
}

let getNoteIndex = function (location) {
  return location.hash.split('#')[1];
}

function listenToUrl(){
  window.addEventListener("hashchange", showNoteByItself);
};

listenToUrl();
