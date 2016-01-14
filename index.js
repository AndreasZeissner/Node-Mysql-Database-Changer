var mysql = require('mysql');
var connection = mysql.createConnection({
	host:	  'localhost',
	user:	  'root', 
	password: 'root', 
	database: 'test'
});

connection.connect(); 

var updateRow = function (connection, row, callback) {
	 console.log(row.guid);
	var changed = row.guid.replace('https://mayflower.de', 'http://mayflower.dev');
	connection.query("UPDATE wp_posts SET guid = ?", [changed], function (err, result) {

	});

	callback();
}

connection.query('SELECT * FROM wp_posts').
on('error', function(err) {
	if (err) {
		throw (err);
	} 
  })
  .on('fields', function(fields) {

  })
  .on('result', function(row) {
	connection.pause();
    updateRow(connection,row, function() {
		connection.resume();
    });
  })
  .on('end', function() {

	connection.destroy(); 
  });
