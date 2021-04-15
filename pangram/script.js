var alphabet = "abcdefghijklmnopqrstuvwxyz";
function findMissingLetters(sentence) {
  sentence = sentence.toLowerCase();
  var missing = [];
  for (var i in alphabet){
    var letter = alphabet[i];
    if (sentence.indexOf(letter) < 0){
      missing[missing.length] = letter;
    }
  }
  return missing;
}
function findUsedLetters(sentence) {
  sentence = sentence.toLowerCase();
  var used = [];
  for (var i in sentence){
    var letter = sentence[i];
    if (alphabet.indexOf(letter) >= 0){
      used[used.length] = letter;
    }
  }
  return used;
}
function update(){
  var sentence = $('#pangram').val();
  var missing = findMissingLetters(sentence);
  var used = findUsedLetters(sentence);
  var missingMsg = (missing.length == 0) ? "Success!" : "Missing: " + missing.join(', ');
  var usedMsg = used.length + " letter" + ((used.length == 1) ? "" : "s");
  $('#result').html(
    '<span class="used">' + usedMsg + '</span><span class="missing">' + missingMsg + '</span>'
  );
}

$(update);
$('#pangram').on('change', update).on('keyup', update);