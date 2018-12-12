const check = (title, callback) => {
  try{
    callback();
    document.body.innerHTML += `<p>${title} PASS</p>`;
  }catch(error){
    document.body.innerHTML +=
    `<p>${title} FAIL<br/>${error.stack.split(' at ').join('<br/>')}</p>`;
  }
};

const isTrue = (returnValue) => {
  if (returnValue) return true;
	throw new Error('Assertion failed.');
};

const expect = (exp) => {
  return({
    toTripleEqual: function(assertion) {toTripleEqual(exp, assertion)}
  });
}

const toTripleEqual = (exp, assertion) => {
  if (exp !== assertion) {
     throw new Error(
       `(${exp}) and (${assertion}) are not equal value and type.`
     );
  }
}
