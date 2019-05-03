/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//quote number index / -1 when loads the page
var quoteNum = -1;

//returns a different quote as the published one
function getRandomQuote() {
  randomQuoteNum = Math.floor(Math.random() * Math.floor(quotes.length));
  while (quoteNum === randomQuoteNum) {
    randomQuoteNum = Math.floor(Math.random() * Math.floor(quotes.length))
  }
  quoteNum = randomQuoteNum;
  return quotes[quoteNum]
};

/*** 
 prints the quote in quote-box div 
***/
function printQuote() {
  quoteObj = getRandomQuote();
  quoteDiv = document.getElementById('quote-box');
  var html = '<p class="quote">' + quoteObj.quote + '</p>';
  html += '<p class="source">' + quoteObj.source;
  if (quoteObj.citation) {
    html += '<span class="citation">' + quoteObj.citation + '</span>';
  };
  if (quoteObj.year) {
    html += '<span class="year">' + quoteObj.year + '</span>';
  };
  if (quoteObj.tags) {
    quoteObj.tags.forEach(item => {
      html += '<br /><span class="tags">' + item + '</span>';
    });
  }
  html += '</p></div>';

  quoteDiv.style.backgroundColor = randomColor(0.3);
  quoteDiv.innerHTML = html;

};

/***
 * random green color of the background changing
 */


//call the function
printQuote();
window.setInterval(printQuote, 20000);

//add a event listener click on the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


