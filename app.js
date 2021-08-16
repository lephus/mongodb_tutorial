const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbtutorial');
mongoose.connection.once('open', function(){
    console.log('Connect successfully...');
}).on('error', function(error){
    console.log(error)
});
