// Taking player names as input
var player1Name = prompt("Player 1, Enter Your Name");
var player2Name = prompt("Player 2, Enter Your Name");

//for debugging
// var player1Name = "player1";
// var player2Name = "player2";

// displaying player names
document.querySelector(".player1-name").textContent = player1Name;
document.querySelector(".player2-name").textContent = player2Name;

// selecting image elements
var img1 = document.getElementById("die1");
var img2 = document.getElementById("die2");

// first roll
var rollValue1, resourcePath1;
function roll1() {
	rollValue1 = Math.floor(Math.random() * 6) + 1;
	var imageResource1 = "dice" + rollValue1 + ".png";
	resourcePath1 = "images/" + imageResource1;
	img1.setAttribute("src", resourcePath1);
}

// second roll
var rollValue2, resourcePath2;
function roll2() {
	rollValue2 = Math.floor(Math.random() * 6) + 1;
	var imageResource2 = "dice" + rollValue2 + ".png";
	resourcePath2 = "images/" + imageResource2;
	img2.setAttribute("src", resourcePath2);
	showResult();
}
function showResult() {
	// who's the winner
	var winner;
	if (rollValue1 > rollValue2) {
		winner = player1Name;
	} else if (rollValue1 < rollValue2) {
		winner = player2Name;
	} else {
		winner = "Draw";
	}

	// verdict
	var result = document.querySelector("h1");

	if (winner == "Draw") {
		result.textContent = "This is a Draw!";
	} else {
		result.textContent = "🚩 " + winner + " Wins!";
	}
}
function restart() {
	window.location.reload();
}
