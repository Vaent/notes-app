const noteClass = require('../src/note.js');
const {expect, matchers, it, instanceOf, describe, check, isTrue} = require('./index.js')

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


describe('Note', () => {
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
});

describe('Even more testing', () =>{
  it('performs the desired tests', () =>{
    var note = new noteClass();
    var short = note.abbreviate("This is a super long over 20 chr string");
    expect(short.length).toBe(20)
  })
})



