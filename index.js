var wordList = require('./data/wordList.json');

function words(options) {

  function word() {
    return generateRandomWord();
  }

  function generateRandomWord() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  if (typeof(options) === 'undefined') {
    return word();
  }

  if (typeof(options) === 'number') {
    options = { count: options };
  }
  
  if (typeof(options.wordsPerString) !== 'number') {
    options.wordsPerString = 1;
  }

  if (typeof(options.formatter) !== 'function') {
    options.formatter = (word) => word;
  }

  if (typeof(options.separator) !== 'string') {
    options.separator = ' ';
  }

  var total = options.count || 1;
  var results = [];
  var token = '';
  var relativeIndex = 0;

  for (var i = 0; (i < total * options.wordsPerString); i++) {
    if (relativeIndex === options.wordsPerString - 1) {
      token += options.formatter(word(), relativeIndex);
    }
    else {
      token += options.formatter(word(), relativeIndex) + options.separator;
    }
    relativeIndex++;
    if ((i + 1) % options.wordsPerString === 0) {
      results.push(token);
      token = ''; 
      relativeIndex = 0;
    }
   
  }
  if (typeof options.join === 'string') {
    results = results.join(options.join);
  }

  return results;
}

module.exports = words;
words.wordList = wordList;
