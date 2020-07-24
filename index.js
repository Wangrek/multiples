'use strict'

var app = require('./app');
var port = 3800;

app.listen(port, () => {
	console.log ("Upload Server on: http://localhost:3800/api/multiples");
});
			