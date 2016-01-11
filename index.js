var mysql = require('mysql');
var connection = mysql.createConnection({
	host:	  'localhost',
	user:	  'root', 
	password: 'root', 
	database: 'test'
});

connection.connect(); 

connection.query('select guid from wp_posts', function (err, rows, fields){
	if (err) {
		throw err;
	}
	rows.forEach(function (entry){
		console.log(entry.guid); 
	});
});
