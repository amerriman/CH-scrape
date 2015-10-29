# Callback Hell

## Steps

1. Create a new Express project with the generator
1. Create a route that -
  - Downloads the HTML from [Hacker News](https://news.ycombinator.com/) and [Reddit Web Development](https://www.reddit.com/r/Web_Development/) via the [request](https://www.npmjs.com/package/request) package,
  - Extracts and analyzes the HTML via [cheerio](https://www.npmjs.com/package/cheerio) from both HTML documents,
  - Downloads and extracts the HTML from [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) if the word "javascript" (case insensitive) is found in the title of the first articles from the HTML from the previous two documents or from [Python](https://www.python.org/) if the word is not found, and
  - Grabs something "fun" from the HTML from the third document (MDN JavaScript or Python docs) and returns it to the end user.
