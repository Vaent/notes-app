const noteClass = require('../src/note.js');
const { check, isTrue} = require('./index.js')

	function testCreate(){
    let note = new noteClass();

    note.create('test note');

    return note.notes[0] === 'test note';
	}

	function testAbbreviate() {
    let note1 = new noteClass();
    var short_string = note1.abbreviate("This is a very long string which is more than 20 characters");
    return short_string === "This is a very long ";
	}

check('creates new note', () => {
    isTrue(testCreate());
});

check('returns abbreviated string', () => {
    isTrue(testAbbreviate());
});
