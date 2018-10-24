//Business Logic
var vowels = ["a","e","i","o","u"];
var consonants = ["q","w","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var toVowels = "way"
var toConsonants = "ay"

function vowels(string) {
  var wordArray = []
  var splitString = string.split("");
  if (vowels.includes(string.charAt(0))) {
    wordArray.push(string + "way")
  }

  console.log(wordArray)

//User Interface
$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();
   var sentence = toString($("#userInput").val())

 });


});


  return wordArray.concat(" ")
}




//  if (consonants.includes(string.charAt(0))) {
//   wordArray.push(splitString.shift())
//   wordArray.push("ay")
// }
