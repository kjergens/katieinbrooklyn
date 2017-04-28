// Global vars
var card_to_match;
var turns;

var setup = function() {

	$(".game").hide();

	// Initialize
	card_to_match = null;
	turns = 0;

	// Shuffle the array of cards
	this.$cards = $(shuffleCards(cards));

	// Arrange the cards on the board
	var board = '';
	this.$cards.each(function(key, val){
		board += '<div class="card_container" data-id="'+ val.id +'"><div class="card">\
		<div class="card_face"><img src="'+ val.img +'"\
		alt="'+ val.name +'" /></div>\
		<div class="card_back"></div></div>\
		</div>';
	})

	// Put board on the page
	$(".game").html(board);

	// Bind each card to event handler
	$(".card_container").on("click", cardClicked);

	// Reveal
	$(".game").show();

};

// Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
var shuffleCards = function(array){

	var counter = array.length, temp, index;
 	// While there are elements in the array
 	while (counter > 0) {
    	// Pick a random index
    	index = Math.floor(Math.random() * counter);
    	// Decrease counter by 1
    	counter--;
    	// And swap the last element with it
    	temp = array[counter];
    	array[counter] = array[index];
    	array[index] = temp;
  	}
  	return array;

};

// Handle card clicked
var cardClicked = function(){
	var $card = $(this);

	// If card is not matched nor picked
	if (!$card.find(".card").hasClass("matched") 
		&& !$card.find(".card").hasClass("active")){

		// Mark the card as active, as in, it's in play.
		$card.find(".card").addClass("active");

		// If there is no other active card, mark this as the card_to_match
		if(!card_to_match){
			card_to_match = $(this).attr("data-id");
		} else { 
				if ($(this).attr("data-id") == card_to_match){
					// Mark both active cards as matched
					$(".active").addClass("matched");
				} 

				// Remove both active cards
				setTimeout(function(){
					$(".active").removeClass("active");
				}, 600);

				card_to_match = null;

				// Increment turns
				turns++;
		}


		// Check if won
		if($(".matched").length == cards.length){

			var winScreen = "<div><h1>You Won in " + 
		      turns + " turns.</h1></div>";

			// Pause for a beat then fade out
			setTimeout(function(){
				$("game").html(winScreen);
				setup();
			}, 1000);

		}
	}
};


var cards = [
	{
		name: "chilled",
		img: "img/chilled.png",
		id: 1,
	},
	{
		name: "dirty",
		img: "img/dirty.png",
		id: 2
	},
	{
		name: "up",
		img: "img/up.png",
		id: 3
	},
	{
		name: "twist",
		img: "img/twist.png",
		id: 4
	}, 
	{
		name: "shaken",
		img: "img/shaken.png",
		id: 5
	},
	{
		name: "rocks",
		img: "img/rocks.png",
		id: 6
	},

];
    
// Setup 
$(function(){
	$.merge(cards, cards);
	
	setup();

});



