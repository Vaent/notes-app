var check = (title, callback) => {
  try{
    callback();
    document.getElementById('results-text').innerHTML +=
    `${title + ' PASS<br/>'}`;
  }catch(error){
    document.getElementById('results-text').innerHTML +=
    `${title + ' FAIL<br/>'}` + error.stack;
  }
};

var isTrue = (returnValue) => {
  if (returnValue) return true;
	throw new Error('Assertion failed.');
};
