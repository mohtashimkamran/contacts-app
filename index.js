var express = require('express');
var port = 4000;
var path = require('path')

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));

// var contact=[
//     {
//         name : "Moha",
//         phone : '9899289382093'
//     }
// ]

app.get('/',function(req,res){
    // return res.render('main',{
    //     contacts_list:contact
    // })
    Contact.find({},function(err,contact){
        if (err){
            console.log('error in fetching');
            return;
        }
        return res.render('main',{
            contacts_list:contact
        })
    })

})

app.post('/create-contact',function(req,res){
    // console.log(req.body);
    // contact.push(req.body);
    // return res.redirect('back');
    Contact.create(req.body,function(err,newcontact){
        if (err){
            console.log("error occured");
            alert('error');
            return;
        }
        console.log("Contact added!",newcontact);
        return res.redirect('back')
    })

})



app.listen(port,function(err){
    if (err){
        console.log("errot");
        return;
    }
    else{
        console.log("server is up and running")
    }
})