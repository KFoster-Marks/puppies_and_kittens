'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    puppies = require('./routes/puppies'),
    kittens = require('./routes/kittens');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); //prints request, status code, and length
app.use(methodOverride('_method')); //this is used in ejs to override request type

app.use('/puppies', puppies); //says: use puppies when path starts with puppies--this is why we deleted the /puppies paths from routes in puppies.js //the puppies middleware will only run on this route
app.use('/kittens', kittens);


app.listen(3000, function() {
  console.log("Listening on port 3000");
});
