'use strict'

function getData(req, res) {
	var output = [];

  for (var i=1; i<=100; i++ ) {
    output.push(multiple(i));
  }
  return res.status(200).send({output});
}

function multiple(i) {
    var words = ["Musical", "TI", "Music"];
    var index = Math.min(i % 3, 1) + Math.min(i % 5, 1) * 2;
    if (index < words.length) {
      console.log(words[index]);
      return words[index];
    }  
    console.log(i);
    return i;
}

module.exports = {
	getData
}