function abbreviate(string) {
  return string.slice(0,20);
}

function test_abbreviate() {
  var short_string = abbreviate("This is a very long string which is more than 20 characters");
  console.log(short_string === "This is a very long ");
}

test_abbreviate();
