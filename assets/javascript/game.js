// ------ Getting our Random Number for players to guess ----- //

// targetNumber function finds a value between min and max and returns it. Nice!
function targetNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//randomNumber variable holds a random number between 19 and 120. Heck yeah it does!
var randomNumber = targetNumber(19, 120);

// dollar-holler calls the h1 tag and inserts our random number. Holla!
$("#number-to-guess").text(randomNumber);





// --------- Displaying Our Crystals and Assigning Random Values ------ //

// We want the crystal images to have random numbers between 1 and 12, so we'll create a variable called crystalNumber and have our targetNumber function find random values between 1 and 12. Now we're cookin', folks!
var crystalNumber = targetNumber(1, 12);
// We don't want the same photo for all 4 crystals, so we're going to create an array and each photo will be an item of that array. Neat!
var crystalPhotos = [
  "./assets/images/one.jpg",
  "./assets/images/two.jpg",
  "./assets/images/three.jpg",
  "./assets/images/four.jpg"
];

// Next we create a for loop to create 4 crystals. Preach!
function randomizeCrystals(){
for (var i = 0; i < crystalPhotos.length; i++) {
  // For each iteration, we will create an imageCrystal. Don't fix what ain't broke!
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect. YES! YES! YES!
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image. VITAL!
  imageCrystal.attr("src", crystalPhotos[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set to a random number using our targetNumber function -- how sweet it is!
  imageCrystal.attr("data-crystalvalue", targetNumber(1,12));

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page. They out there!
  $("#crystals").append(imageCrystal);
}
}

randomizeCrystals();


// ------ Defining a user guess ------ //

// define our global counter so that it actually adds up the score for the user. You GOTTA love that!
var counter = 0;

// set rules for a click on our crystal. Rules are important, my friends.
$(".crystal-image").on("click", function() {
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;

  // In this game we call life, you either win or lose. Same goes for this game. Here are the rules for that game
  $("#user-score").text(counter);

  if (counter === randomNumber) {
    alert("You win!");
  } else if (counter >= randomNumber) {
    $("h2").text("You lose!!");
    $("#reset").html("<button id='reset-button'> TRY AGAIN! </button>")
  }
});

// --------- Reset the game ------ //

function reset(){
  counter = 0;
  randomNumber = targetNumber(19,120);
  randomizeCrystals();
  $("#number-to-guess").text(randomNumber);
  $("h2").text("this works");
  $("#reset").empty();
};

$("#reset-button").on("click", function() {
  reset();
});
