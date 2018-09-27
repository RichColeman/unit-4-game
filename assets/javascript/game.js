// Let's first create an array of "secrets of the universe" that the user will get to read when they solve the puzzle. Let's put it first so we can easily add more phrases if inspiration strikes in the future!

var secrets = [
  "You don't actually need to fill your car with gas. What you think is gasoline is actually just water.",
  "You're actually living in a scripted TV show and all of your friends and family are actors.",
  "Ghostbusters 2 is better than Ghostbusters.",
  "Pickles have feelings.",
  "The food items in your fridge chat with eachother when the door is closed and none of them enjoy talking to the condiments.",
  "Antartica is not a real place.",
  "Since 1989, every home has come with a robotic servant living in the walls. You can activate this servant by pressing up against the most western wall in your home and shouting the words, 'I love you, robots' three times.",
  "Validation triggers are your friend."
];

// Let's define a variable that will act as our validation trigger. This is going to prevent the user from getting additional secrets.
var hasSecret = false;


// ------ Getting our Random Number for players to guess ----- //

// targetNumber function finds a value between min and max and returns it. Nice!
function targetNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//randomNumber variable holds a random number between 19 and 120. Heck yeah it does!
var randomNumber = targetNumber(19, 120);

// calls the number to guess span and inserts our random number. Holla!
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
function randomizeCrystals() {
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
    imageCrystal.attr("data-crystalvalue", targetNumber(1, 12));

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
  $("#user-score").text(counter);

  // In this game we call life, you either win or lose. Same goes for this game. Here are the rules for winning and losing based on our counter
  if (counter === randomNumber) {
    $("h2").text("You WIN!!");
    $("h3").empty();
    $("#reset").html("<button id='reset-button'> PLAY AGAIN! </button>");
    if (hasSecret === false){$("#secret").html(
      "<p> Here's a secret: " + secrets[targetNumber(0, 7)] + "</p>"
    );
    hasSecret = true;
  };
    $(".crystal-image").attr("data-crystalvalue", "0");    

  } else if (counter >= randomNumber) {
    $("h2").text("You lose! You know nothing of value!");
    $("#reset").html("<button id='reset-button'> PLAY AGAIN! </button>");
    $(".crystal-image").attr("data-crystalvalue", "0");

  }
});

// --------- Reset the game ------ //

// gotta reset the game on that sweet, sweet button click
$("#reset").on("click", function() {
  location.reload();
});