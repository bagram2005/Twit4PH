
var Twit = require('twit'); //Import Twit API

//pulling all my twitter account info from a config file
var config = require('./config.js');

//setting a Twit object for connection to the API
var T = new Twit(config);

var params = {
    q: 'zika',
    count: 100
};


//search Twitter for all tweets containing the word "zika"
T.get('search/tweets', {q: params}, function(err, tweets, response){
    console.log(params);
});