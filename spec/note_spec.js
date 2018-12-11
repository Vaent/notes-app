const noteClass = require('../src/note.js');
const { toBe, instanceOf, group, check, isTrue} = require('./index.js')

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
  check('instanceOf testing', () => {
    var test_note = new noteClass();
    instanceOf(test_note, noteClass)
  });
  check('toBe testing',() => {
    var sum = 1 + 1;
    toBe(sum, 2)
  });
});



