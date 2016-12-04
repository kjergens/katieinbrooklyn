$(document).ready(function () {

	var score=0;
	var answered = 0;
	var total = 7;
	var question1_answered = false;
	var question2_answered = false;
	var question3_answered = false;
	var question4_answered = false;
	var question5_answered = false;
	var question6_answered = false;
	var question_last_answered = false;

	/*
Call this function each time an answer is selected.
*/
var getTotal = function() {
	if (answered == total) {
			document.getElementById("total_result").innerHTML += "<h3>Total: " + score + " out of " + answered + "</h3>";
	}
}

/*
Question 1
*/
	$(".option1").click(function() {
		
		if (!question1_answered) {
			question1_answered = true;
			answered++;
			document.getElementById("blackout1").style.opacity = 0;
			document.getElementById("result1_container").style.opacity = 1;

			document.getElementById("correct1").style.background = "#b2d8b2";
			document.getElementById("correct1").style.color = "#338933";

			if (this.classList.contains("correct")) {
				score++;
				document.getElementById("correct1").style.border = "6px solid #66b266";
				document.getElementById("result1").innerHTML += "<h3>Correct!</h3>";
			}
			else {
				this.style.background = "#ee9999";
				this.style.color = "#994444";
				this.style.border = "6px solid #bb6666";
				document.getElementById("result1").innerHTML += "<h3>Incorrect</h3>";
			}
			document.getElementById("score1").innerHTML += "<h4>Score: " + score + " out of " + answered + "</h4>";

		}
	}); 

/*
Question 2
*/
	$(".option2").click(function() {

		if (!question2_answered) {
			question2_answered = true;
			answered++;
			document.getElementById("blackout2").style.opacity = 0;
			document.getElementById("result2_container").style.opacity = 1;

			document.getElementById("correct2").style.background = "#b2d8b2";
			document.getElementById("correct2").style.color = "#338933";

			if (this.classList.contains("correct")) {
				score++;
				document.getElementById("correct2").style.border = "6px solid #66b266";
				document.getElementById("result2").innerHTML += "<h3>Correct!</h3>";
			}
			else {
				this.style.background = "#ee9999";
				this.style.color = "#994444";
				this.style.border = "6px solid #bb6666";
				document.getElementById("result2").innerHTML += "<h3>Incorrect</h3>";
			}
			document.getElementById("score2").innerHTML += "<h4>Score: " + score + " out of " + answered + "</h4>";
		}
	}); 


	/*
Question 3 - 12 changes to make
*/
	$(".option3").click(function() {

		if (!question3_answered) {
			question3_answered = true;
			answered++;
			document.getElementById("blackout3").style.opacity = 0;
			document.getElementById("result3_container").style.opacity = 1;

			document.getElementById("correct3").style.background = "#b2d8b2";
			document.getElementById("correct3").style.color = "#338933";

			if (this.classList.contains("correct")) {
				score++;
				
				document.getElementById("correct3").style.border = "6px solid #66b266";
				document.getElementById("result3").innerHTML += "<h3>Correct!</h3>";
			}
			else {
				this.style.background = "#ee9999";
				this.style.color = "#994444";
				this.style.border = "6px solid #bb6666";
				document.getElementById("result3").innerHTML += "<h3>Incorrect</h3>";
			}
			document.getElementById("score3").innerHTML += "<h4>Score: " + score + " out of " + answered + "</h4>";
		}
	});

	/*
Question 4 - 12 changes to make
*/
	$(".option4").click(function() {

		if (!question4_answered) {
			question4_answered = true;
			answered++;
			document.getElementById("blackout4").style.opacity = 0;
			document.getElementById("result4_container").style.opacity = 1;

			document.getElementById("correct4").style.background = "#b2d8b2";
			document.getElementById("correct4").style.color = "#338933";

			if (this.classList.contains("correct")) {
				score++;
				document.getElementById("correct4").style.border = "6px solid #66b266";
				document.getElementById("result4").innerHTML += "<h3>Correct!</h3>";
			}
			else {
				this.style.background = "#ee9999";
				this.style.color = "#994444";
				this.style.border = "6px solid #bb6666";
				document.getElementById("result4").innerHTML += "<h3>Incorrect</h3>";
			}
			document.getElementById("score4").innerHTML += "<h4>Score: " + score + " out of " + answered + "</h4>";
		}
	});

	/*
Question 5 - 12 changes to make
*/
	$(".option5").click(function() {

		if (!question5_answered) {
			question5_answered = true;
			answered++;
			document.getElementById("blackout5").style.opacity = 0;
			document.getElementById("result5_container").style.opacity = 1;

			document.getElementById("correct5").style.background = "#b2d8b2";
			document.getElementById("correct5").style.color = "#338933";
				
			if (this.classList.contains("correct")) {
				score++;
				document.getElementById("correct5").style.border = "6px solid #66b266";
				document.getElementById("result5").innerHTML += "<h3>Correct!</h3>";
			}
			else {
				this.style.background = "#ee9999";
				this.style.color = "#994444";
				this.style.border = "6px solid #bb6666";
				document.getElementById("result5").innerHTML += "<h3>Incorrect</h3>";
			}
			document.getElementById("score5").innerHTML += "<h4>Score: " + score + " out of " + answered + "</h4>";
		}
	});

	/*
Question 6 - 12 changes to make
*/
	$(".option6").click(function() {

		if (!question6_answered) {
			question6_answered = true;
			answered++;
			document.getElementById("blackout6").style.opacity = 0;
			document.getElementById("result6_container").style.opacity = 1;

			document.getElementById("correct6").style.background = "#b2d8b2";
			document.getElementById("correct6").style.color = "#338933";
				
			if (this.classList.contains("correct")) {
				score++;
				document.getElementById("correct6").style.border = "6px solid #66b266";
				document.getElementById("result6").innerHTML += "<h3>Correct!</h3>";
			}
			else {
				this.style.background = "#ee9999";
				this.style.color = "#994444";
				this.style.border = "6px solid #bb6666";
				document.getElementById("result6").innerHTML += "<h3>Incorrect</h3>";
			}
			document.getElementById("score6").innerHTML += "<h4>Score: " + score + " out of  " + answered + "</h4>";
		}
	});

	/*
Question 7 - 12 changes to make
*/
	$(".option7").click(function() {

		if (!question_last_answered) {
			question_last_answered = true;
			answered++;
			document.getElementById("blackout7").style.opacity = 0;
			document.getElementById("result7_container").style.opacity = 1;

			document.getElementById("correct7").style.background = "#b2d8b2";
			document.getElementById("correct7").style.color = "#338933";

			if (this.classList.contains("correct")) {
				score++;
				document.getElementById("correct7").style.border = "6px solid #66b266";
				document.getElementById("result7").innerHTML += "<h3>Correct!</h3>";
			}
			else {
				this.style.background = "#ee9999";
				this.style.color = "#994444";
				this.style.border = "6px solid #bb6666";
				document.getElementById("result7").innerHTML += "<h3>Incorrect</h3>";
			}
		
			document.getElementById("score7").innerHTML += "<h4>Score: " + score + " out of " + answered + "</h4>";

			document.getElementById("score_final").style.opacity = 1;
			document.getElementById("score_final").innerHTML += "<h1>Total: " + score + " out of " + answered + "</h1>";

		}
	});

});



