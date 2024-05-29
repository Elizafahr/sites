var wordArray = [];

function addWords() {
  var wordInput = document.getElementById("wordInput");
  var words = wordInput.value.trim().split(",");

  words.forEach(function(word) {
    var trimmedWord = word.trim();
    if (trimmedWord !== "") {
      wordArray.push(trimmedWord);
    }
  });

  wordInput.value = "";
}

function generateRandom() {
  var wordList = document.getElementById("wordList");
  var translationList = document.getElementById("translationList");
  
  translationList.innerHTML = "";

  var randomWords = [];

  for (var i = 0; i < wordArray.length && i < 5; i++) {
    var randomIndex = Math.floor(Math.random() * wordArray.length);
    
    
    if(!randomWords.includes(wordArray[randomIndex]))
    {
        randomWords.push(wordArray[randomIndex]);
    }
  }

  randomWords.forEach(function(word) {
    var li = document.createElement("li");
    li.innerHTML = word;

    var input = document.createElement("input");
    input.className = "translationInput";
    input.placeholder = "Enter translation";
    li.appendChild(input);

    translationList.appendChild(li);
  });
}
