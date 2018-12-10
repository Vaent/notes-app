const noteClass = require('../src/note.js');

function testCreate(){
    let note = new noteClass();

    note.create('test note');

    console.log(note.notes[0] === 'test note');
}

function testAbbreviate() {
    let note1 = new noteClass();
    var short_string = note1.abbreviate("This is a very long string which is more than 20 characters");
    console.log(short_string === "This is a very long ");
}

testAbbreviate();
testCreate();
