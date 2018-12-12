var check = (title, callback) => {
  try{
    callback();
    document.body.innerHTML += `<p>${title} PASS</p>`;
  }catch(error){
    document.body.innerHTML +=
    `<p>${title} FAIL<br/>${error.stack.split(' at ').join('<br/>')}</p>`;
  }
};

var isTrue = (returnValue) => {
  if (returnValue) return true;
	throw new Error('Assertion failed.');
};
