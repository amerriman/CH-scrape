var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio=require("cheerio");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


  request('https://news.ycombinator.com/',  function (error, response, html) {
    if (!error && response.statusCode == 200) {
      // console.log(html)
      // pass DOM to cheerio
      var $ = cheerio.load(html);
      $('span.comhead').each(function(i, element){

        // select previous element
        var a = $(this).prev();
        // parse the link title
        var title = a.text();
        // parse the href attribute from the "a" element:
        var url = a.attr('href');

        // data store in an object
        var yCombScrapedData = {
          title: title,
          url: url
        };

        console.log(yCombScrapedData);
      });
      console.log("\nYCombinator DONE!\n");
    }
  });


  request('https://www.reddit.com/r/Web_Development/',  function (error, response, html) {
    if (!error && response.statusCode == 200) {
      // console.log(html)
      // // pass DOM to cheerio
      var $ = cheerio.load(html);
      $('span.domain').each(function(i, element){

        // select previous element
        var a = $(this).prev();

        // parse the link title
        var title = a.html();
        // console.log(title);
        // parse the href attribute from the "a" element and add the beginning:
        var url = "https://www.reddit.com" + a.attr('href');
        // console.log(url)

        // data store in an object
        var redditScrapedData = {
          title: title,
          url: url
        };

      console.log(redditScrapedData);
      });
      console.log("\nREddit DONE!\n");
    }
  });


});


module.exports = router;
