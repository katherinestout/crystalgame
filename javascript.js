$(document).ready(function(){



    
    var wins = 0;
    console.log("wins:"+ wins);
    var losses= 0;
    console.log("losses:" + losses);
    //var numToGuess = 0;
    var score=0;
    console.log("your score:" + score);



//score=$('yourscore');
function numberToGuessFunction(max){
return Math.floor(Math.random() * Math.floor(max));}

//Main random number
var numToGuess = numberToGuessFunction(250);
console.log(numToGuess);
document.getElementById("numToGuess").innerHTML = numToGuess;

//generating crystal values
var crystalValue1 = numberToGuessFunction(100);
console.log(crystalValue1);
var crystalValue2 = numberToGuessFunction(100);
console.log(crystalValue2);
var crystalValue3 =numberToGuessFunction(100);
console.log(crystalValue3);


//$('currentNumber').val(numToGuess);
$(".crystals").val(crystalValue1,crystalValue2,crystalValue3);

$("#one").click(function(){
crystalValue1 = numberToGuessFunction(100);
console.log(crystalValue1);
score += crystalValue1;
document.getElementById("yourscore").innerHTML = score;
winlose();
});


$("#two").click(function(){
crystalValue2 = numberToGuessFunction(100);
console.log(crystalValue2);
score += crystalValue2;
document.getElementById("yourscore").innerHTML = score;
winlose();
});

$("#three").click(function(){
 crystalValue3 =numberToGuessFunction(100);
console.log(crystalValue3);
score += crystalValue3;
document.getElementById("yourscore").innerHTML = score;
winlose();
});

//wins = $("#wins");
//losses = $("#losses");

function winlose(){

if(score === numToGuess){
// alert("Winnnnner");
wins++; 
//document.getElementById("#wins").innerHTML = wins; 
$("#wins").text("Wins:" + wins);
console.log("wins" + wins);
reset();

} else if (score > numToGuess){
// alert("Loser! Try again!");
losses++;
//document.getElementById("#losses").innerHTML = losses;
    //reset();
$("#losses").text("losses:").text("Losses:" + losses);
console.log("losses:" + losses);
reset();
}}

//each time you win or lose, you need to run a function that resets the 
//score and numtoguess
function reset(){

score = 0;
numToGuess =0;

numToGuess = numberToGuessFunction(250);
console.log(numToGuess);
document.getElementById("numToGuess").innerHTML = numToGuess;

}
});