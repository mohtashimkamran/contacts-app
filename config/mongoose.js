const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact_list',{ useNewUrlParser: true , useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error',console.error.bind("error"));

db.once('open',function(){
    console.log('suukcess');
});