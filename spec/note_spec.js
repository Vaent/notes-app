function runAllTests() {
  check('creates new note', function(){
    let note = new Note();
    note.create('test note');
    isTrue(note.notes[0] === 'test note');
  });

  check('returns abbreviated string', function(){
    let note = new Note();
  	long_string = "This is a very long string which is more than 20 characters";
    var short_string = note.abbreviate(long_string);
    isTrue(short_string === "This is a very long ");
  });

  check('returns an array of all notes', function(){
    let note = new Note();
    var note1 = 'test note number 2';
    var note2 = 'Here is a note which is just a string';
    var note3 = 'final one';
    note.create(note1);
    note.create(note2);
    note.create(note3);
    isTrue(note.all().includes(note1));
    isTrue(note.all().includes(note2));
    isTrue(note.all().includes(note3));
  });
}
