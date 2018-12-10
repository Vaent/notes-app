const noteClass = require('../src/note.js');
const { check, isTrue } = require('./index.js');

check('creates new note', function(){
  let note = new noteClass();
  note.create('test note');
  isTrue(note.notes[0] === 'test note');
});

check('returns abbreviated string', function(){
  let note = new noteClass();
	long_string = "This is a very long string which is more than 20 characters";
  var short_string = note.abbreviate(long_string);
  isTrue(short_string === "This is a very long ");
});
