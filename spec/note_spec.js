const noteClass = require('../src/note.js');

function testCreate(){
    let note = new noteClass();

    note.create('test note');

    console.log(note.notes[0] === 'test note');
}

testCreate();
