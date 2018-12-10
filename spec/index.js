const check = (title, cb) => {
  try{
    cb();
    console.log(`${' PASS '}`);
  } catch(e) {
    console.log(`${' FAIL '}`);
    console.log(e.stack);
  }
};

const guarantee = (val) => {
	if(val) return true;

	throw new Error('Assertion failed.')
};

module.exports = {check, guarantee}