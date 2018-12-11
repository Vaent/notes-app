// const noteClass = require('./note.js');
let note = new Note();

let create = function() {
  let text = document.getElementById('text').value;

  note.create(text);
  displayNotes();
  document.getElementById('text').value = "";
}

let displayNotes = function() {
	let displayed = note.all();
	let html_text = document.getElementById('note-list');
  html_text.innerHTML = "";

  for (let i = 0; i < displayed.length; i++){
		html_text.innerHTML += "<a href='#" + i + "'>" + note.abbreviate(displayed[i]) + "</a><br/>";
  };
}

let showNoteByItself = function(){
  let single_note = document.getElementById('single-note');
  let note_text_div = document.getElementById('note-text');
  let note_text = note.all()[getNoteIndex(window.location)];
  note_text_div.innerHTML = note_text;
  single_note.removeAttribute('hidden');
  let main_div = document.getElementById('main-screen');
  main_div.hidden = 'hidden';
}

let getNoteIndex = function (location) {
  return location.hash.split('#')[1];
}

let goBack = function(){
  let note_div = document.getElementById('single-note');
  note_div.hidden = 'hidden';
  let main_div = document.getElementById('main-screen');
  main_div.removeAttribute('hidden');
}

function listenToUrl(){
  window.addEventListener("hashchange", showNoteByItself);
};

listenToUrl();
