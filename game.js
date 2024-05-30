var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var topScore = 0;

var started = false ;

//-----------------------------------------------------------------------------//

//begin a game by pressed any button on a keyboard for laptop.
$(document).keydown(function(){
  if(!started){
   $("#level-title").text("Level " + level); // statr level 0.
   setTimeout(function(){
    nextSequence(); 
   },500);
   started = true;
  }
 });
//---------------------------------------------------------------------------//
//begin a game by pressed any button on a keyboard for mobile.

 $(".start-button").click(function(){
  if(!started){
   $("#level-title").text("Level " + level); // statr level 0.
   setTimeout(function(){
    nextSequence(); 
   },500);
   started = true;
  }
 });
//------------------------------------------------------------------------------//

// start a game
$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});
//------------------------------------------------------------------------------//
function checkAnswer(currentLevel){

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        if(userClickedPattern.length === gamePattern.length){

         setTimeout(function(){

            nextSequence();

         }, 1000);

        }

    } else {
       
        $("#level-title").text("Game Over Press Start Key to Restart");

        audio = new Audio("sounds/wrong.mp3");
        audio.play();

         $("body").addClass("game-over");

         setTimeout(function(){
       
         $("body").removeClass("game-over");

        },200);

         topScoreLevel(level);
         startOver();

       }
      }
//--------------------------------------------------------------------------------//

function nextSequence(){

    userClickedPattern = [];

    level++ ;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4); // random number between 0-3 .

    var randomChosenColour = buttonColours[randomNumber]; // randomChosenColour = any color 

    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
   
  }
//-------------------------------------------------------------//

  function topScoreLevel (currentScore){

    if(currentScore > topScore){

      $(".score").text(currentScore);
       topScore = currentScore;

    } else {

      $(".score").text(topScore);

    }
  }
//------------------------------------------------------------//

  function startOver(){
   
       level = 0 ;
       gamePattern = [];
       started = false ;

  }
//--------------------------------------------------------------//

  function playSound(soundName){
     
    var audio = new Audio("sounds/" + soundName + ".mp3");
    audio.play();

  }
//---------------------------------------------------------------//

  function animatePress(currentColour){

       $("#" + currentColour).addClass("pressed");

       setTimeout(function(){

        $("#" + currentColour).removeClass("pressed");

      }, 100);
  }


  

   
