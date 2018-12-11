const noteClass = require('../src/note.js');
const { group, check, isTrue} = require('./index.js')

function testCreate(){
  var note = new noteClass();

  note.create('test note');

  return note.notes[0] === 'test note';
}

function testAbbreviate() {
  var note = new noteClass();
  var short_string = note.abbreviate("This is a very long string which is more than 20 characters");
  return short_string === "This is a very long ";
}


group('Note', () => {
  check('creates new note', () => {
    isTrue(testCreate());
  });
  check('returns abbreviated string', () => {
    isTrue(testAbbreviate());
  });
});



