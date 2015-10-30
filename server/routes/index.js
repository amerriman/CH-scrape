var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio=require("cheerio");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  var articles = [];
  var python = true;


  request('https://news.ycombinator.com/',  function (error, response, html) {

    if (!error && response.statusCode == 200) {
      // console.log(html)
      // pass DOM to cheerio
      var $ = cheerio.load(html);
        // select previous element
        var yComb = $('span.deadmark').next().first().text();
        var yWords = yComb.split(" ");
        articles.push(yWords);
    }
  })
  .pipe(request('https://www.reddit.com/r/Web_Development/',  function (error, response, html) {
    if (!error && response.statusCode == 200) {
      // // pass DOM to cheerio
      var $ = cheerio.load(html);
       //get the first title from reddit
        var reddit = $('a.title').first().text();
        var rWords = reddit.split(" ");
        articles.push(rWords);

    }
      console.log(articles, "articles at end of reddit");
      for (var i = 0; i < articles.length; i++) {
        for (var j = 0; j < articles[i].length; j++) {
          // console.log(articles[i][j].toUpperCase())
          if (articles[i][j].toLowerCase() === 'javascript') {
            console.log("JAVASCRIPTY!");
            python = false;
          }
        }
      }
        console.log(python, "python");
  }));

//Below produces nothing but the empty array
  // console.log(articles, "articles outside")
});

module.exports = router;
