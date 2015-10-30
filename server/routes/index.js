var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio=require("cheerio");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



request('https://news.ycombinator.com/',  function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // console.log(html)
    // pass DOM to cheerio
    var $ = cheerio.load(html);
      // select previous element
      var a = $('span.deadmark').next().first().text();
      console.log(a, "\nYCombinator DONE!\n");
  }
});


request('https://www.reddit.com/r/Web_Development/',  function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // console.log(html)
    // // pass DOM to cheerio
    var $ = cheerio.load(html);
     //get the first title from reddit
      var a = $('a.title').first().text();
      console.log(a, "\nREddit DONE!\n");
  }
});



module.exports = router;
