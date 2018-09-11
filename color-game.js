var difficulty = 1;
var selectedBox = "";
var selectedColor = "";
var colors = [];
var gameOver = 0;


window.onload = function() {
	newGame();
}


function startGame(diff) {
	document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "rgb(94, 155, 255)";
	document.getElementById("msg").innerHTML = "";
	document.getElementById("newBtn").innerHTML = "New Game";

	colors = [];
	var s0 = document.getElementById("s0");
	var s1 = document.getElementById("s1");
	var s2 = document.getElementById("s2");

	var s3 = document.getElementById("s3");
	var s4 = document.getElementById("s4");
	var s5 = document.getElementById("s5");

	s0.style.backgroundColor = randomColor();
	s1.style.backgroundColor = randomColor();
	s2.style.backgroundColor = randomColor();

	s0.style.visibility = "visible";
	s1.style.visibility = "visible";
	s2.style.visibility = "visible";

	if (diff == 0) {
		s3.style.visibility = "hidden";
		s4.style.visibility = "hidden";
		s5.style.visibility = "hidden";
		selectedBox = "s" + Math.floor(Math.random() * 3);
	} else {
		s3.style.visibility = "visible";
		s4.style.visibility = "visible";
		s5.style.visibility = "visible";

		s3.style.backgroundColor = randomColor();
		s4.style.backgroundColor = randomColor();
		s5.style.backgroundColor = randomColor();
		selectedBox = "s" + Math.floor(Math.random() * 6);
	}

	selectedColor = document.getElementById(selectedBox).style.backgroundColor;

	console.log(selectedBox);
	console.log(selectedColor);

	document.getElementById("color-label").innerHTML = selectedColor;
}

function newGame() {
	gameOver = 0;
	startGame(difficulty);
}

function boxClick(num) {
	if (gameOver) {
		return;
	}

	console.log("s" + num);
	let id = "s" + num;
	if (id == selectedBox) {
		// Win condition
		document.getElementById("msg").innerHTML = "Correct!"
		sList = document.getElementsByClassName("square");
		var i = 0;
		for (i = 0; i < sList.length; i++) {
			sList[i].style.backgroundColor = selectedColor;
		}
		document.getElementsByClassName("jumbotron")[0].style.backgroundColor = selectedColor;
		document.getElementById("newBtn").innerHTML = "Play Again?";
		gameOver = 1;
	} else {
		document.getElementById("msg").innerHTML = "Try Again"
		document.getElementById(id).style.visibility = "hidden";
	}
}

function setDifficulty(diff) {
	if (diff != difficulty) {
		if (diff == 0) {
			document.getElementById("easy").classList.add("selected");
			document.getElementById("hard").classList.remove("selected");
		} else {
			document.getElementById("hard").classList.add("selected");
			document.getElementById("easy").classList.remove("selected");
		}
		difficulty = diff;
		newGame();
	}

}

function randomColor() {
	var colorString = "";
	while (colors.includes(colorString) || colorString == "") {
		var v1 = Math.floor(Math.random() * 256);
		var v2 = Math.floor(Math.random() * 256);
		var v3 = Math.floor(Math.random() * 256);
		var colorString = "rgb(" + v1 + ", " + v2 + ", " + v3 + ")";
	}
	colors.push(colorString);
	return colorString;
}

function selectBox(min, max) {
	return "s" + Math.floor(Math.random() * 5);
}
