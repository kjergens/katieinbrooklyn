// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		// Constructor
		init: function(cards){

			// Shuffle the array of cards
			this.$cards = $(this.shuffleCards($.merge(cards, cards)));

			// Arrange the cards on the board
			var board = '';
			this.$cards.each(function(key, val){
				board += '<div class="card" data-id="'+ val.id +'"><div class="inside">\
				<div class="front"><img src="'+ val.img +'"\
				alt="'+ val.name +'" /></div>\
				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
			})

			// Put board on the page
			$(".game").html(board);

			// Bind each card to event handler
			$(".card").on("click", this.cardClicked);

			// Set states
			this.paused = false;
     	this.guess = null;
     	this.turns = 0;
		},

		// Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
		shuffleCards: function(array){

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

		},

		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);

			// If game not paused and the inside of the card is not matched nor picked
			if(!_.paused && !$card.find(".inside").hasClass("matched") 
				&& !$card.find(".inside").hasClass("picked")){

				// Mark the card as picked.
				$card.find(".inside").addClass("picked");

				// If there is no other guess, mark this as the guess
				if(!_.guess){
					// Increment turns
					_.turns++;
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){

					// Mark as matched! (I only mark the picked one as matched)
					$(".picked").addClass("matched");

					// Turn off the guess semaphore
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}

				var winScreen = "<div><h1 style='font-size:72px;color:white'>You Won in " + 
				      _.turns + " turns.</h1></div>";


				// Check if won
				if($(".matched").length == $(".card").length){
					this.paused = true;
					setTimeout(function(){
						//$(".game").fadeOut();
						$(".game").html(winScreen);
					}, 1000);
				}
			}
		},


	};

	var cards = [
		{
			name: "php",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
			id: 1,
		},
		{
			name: "css3",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
			id: 2
		},
		{
			name: "html5",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
			id: 3
		},
		{
			name: "jquery",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
			id: 4
		}, 
		{
			name: "javascript",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
			id: 5
		},
		{
			name: "node",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
			id: 6
		},

	];
    
	Memory.init(cards);


})();