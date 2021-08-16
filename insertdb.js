var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var random_name = require('node-random-name');
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let myobj = []
  for(var i = 0; i< 500; i++){
    const _name = random_name();
    const _address = String(Math.floor(Math.random() * 1000) + 1) +" "+  random_name();
    var newObj = { name: _name, address: _address , age: Math.floor(Math.random() * 80) + 1};
    myobj.push(newObj);
  }
  var dbo = db.db("studentdb");
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});