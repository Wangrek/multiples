'use strict'

function getData(req, res) {
	var output = [];
	for (var i=1; i<=100; i++ ) {
    switch(multiple(i,3) && multiple(i,5)) {
      case true:
        console.log('Musical');
        output.push('Musical');
        break;
      case false:
        switch(multiple(i,5)) {
          case true:
            console.log('TI');
            output.push('TI');
            break;
          case false:
            switch(multiple(i,3)) {
              case true:
                console.log('Music');
                output.push('Music');
                break;
              default:
                console.log(i);
                output.push(i);
                break;
            }    
        }
    }
  }
  return res.status(200).send({output});
}

function multiple(value, multiple) {
    var resto = value % multiple;
    if (resto === 0) {
      return true;
    } 
    return false;
}

module.exports = {
	getData
}