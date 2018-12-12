// tests begin by calling the 'check' function from index.js
check('describe your expectation here', function(){
  // set up your conditions here
  let aVariable = something;
  executeSomeMethod(aVariable);
  // call 'isTrue' to test the reult of your actions
  // pass in a comparison which evaulates to true/false
  isTrue(resultOfCalledMethod() === 'the result I expect');
});

// further tests
check('foo', function(){
  // ...
});
