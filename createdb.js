var mongodb = require('mongodb');
var url = "mongodb://localhost:27017/studentdb";
mongodb.connect(url, function(err, db){
    if (err){
        console.log(err)
    }
    else{
        console.log("Database created!");
    }
    db.close();
});