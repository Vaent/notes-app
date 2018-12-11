const describe = (title, callback) => {
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

const expect = (exp) => matchers(exp)

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

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

module.exports = {expect, matchers, it, instanceOf, describe, check, isTrue}
