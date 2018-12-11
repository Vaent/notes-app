const group = (title, callback) => {
  console.log(`\n⇨ ${title}`);
  callback();
};

const check = (title, callback) => {
  try{
    callback();
    console.log(`${title} => PASS`);
  } catch(error) {
    console.log(`${title} => FAIL`);
    console.log(error.stack);
  }
};

const isTrue = (returnValue) => {
  if (returnValue){
  	return true;
  }
	throw new Error('Assertion failed.');
};

const instanceOf = (assertion, expectation) => {
	if (assertion instanceof expectation) {
		return true;
	}
	throw new Error('Assertion failed.');
};

const toBe = (assertion, expectation) => {
	if (assertion === expectation){
		return true;
	}
	throw new Error('Assertion failed.');
};

module.exports = { toBe, instanceOf, group, check, isTrue}
