const check = (title, callback) => {
  try{
    callback();
    console.log(`${title + ' PASS'}`);
  }catch(error){
    console.log(`${title + ' FAIL'}`);
    console.log(error.stack);
  }
};

const isTrue = (returnValue) => {
  if (returnValue) return true;
	throw new Error('Assertion failed.');
};

module.exports = { check, isTrue }
