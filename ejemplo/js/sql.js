function showAlert(msj)
{
    navigator.notification.alert(
        msj,  // message
        'UNAB',   // title
        ''    // buttonName
    );
}//fin function mensaje.
	
function sql()
{	
	var db = sqlitePlugin.openDatabase('mydb.db', '1.0', '', 1);
db.transaction(function (txn) {
  txn.executeSql('SELECT 42 AS `answer`', [], function (tx, res) {
    showAlert(res.rows.item(0)); // {"answer": 42}
  });
});
}//fin function

function sql2()
{	
	var db = sqlitePlugin.openDatabase('contacts.db', '1.0', '', 1);
db.transaction(function (txn) {
 txn.executeSql('CREATE TABLE IF NOT EXISTS contactos (id integer primary key, nombre, telefono)');
  txn.executeSql('delete from contactos');
  txn.executeSql('INSERT INTO contactos (nombre, telefono) VALUES (?,?)', ["contacto 1", "987654321"]);
  txn.executeSql('INSERT INTO contactos (nombre, telefono) VALUES (?,?)', ["contacto 2", "6789054"]);
  txn.executeSql('INSERT INTO contactos (nombre, telefono) VALUES (?,?)', ["contacto 3", "123456789"]);
  
  txn.executeSql('SELECT * FROM contactos', [], function(tx, results) {
			var len = results.rows.length;
			var i;
			console.log(len);
			for (i = 0; i < len; i++) {
				$("#lista_de_contactos").append("" + results.rows.item(i).nombre + " - " + results.rows.item(i).telefono + "<br>");
			}
		}, null);

});
}//fin function