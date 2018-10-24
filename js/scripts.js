//Business Logic
var vowels = ["a","e","i","o","u"];
var consonants = ["q","w","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var toVowels = "way"
var toConsonants = "ay"


function toString(str) {
   var step1 = str.split(" ");
   for(var i =0; i <step1.length; i++) {
     if (vowels.indexOf(step1[i])>=0) {
       step1[i] = step1[i] + toVowels
     }
   };
   console.log("this is step1 " + step1)
   return step1.join(step1);
}






//User Interface
$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();
   var sentence = toString($("#userInput").val())

 });


});
