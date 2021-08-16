const mongoose  = require('mongoose');
// ES6 Promises
mongoose.Promise = global.Promise;
// connect to db before run
// connect to mongodb
mongoose.connect('mongodb://localhost:27017/studentdb');
mongoose.connection.once('open', function(){
    console.log("connect successfully !")
}).on('error', function(error){
    console.log("Connect error: ", error);
});