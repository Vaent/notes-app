function Note(){
    this.notes = [];
}

Note.prototype.create = function(description){
    this.notes.push(description);
}

Note.prototype.abbreviate = function(string){
    return string.slice(0, 20);
};

module.exports = Note;
