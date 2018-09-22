var playMove = null;


// not used at the moment
var computerPlayRandom = function() {
	
	var playableMoves = []
		for (var i = 1; i < 10; i++) {
			if (gameBoardPositions[i].fill === 0) {
				playableMoves.push(i);
			} else {
				playableMoves.push(0);
			}
		}
		playMove = 10;
		while (
		playMove != playableMoves[0] &&
		playMove != playableMoves[1] &&
		playMove != playableMoves[2] &&
		playMove != playableMoves[3] &&
		playMove != playableMoves[4] &&
		playMove != playableMoves[5] &&
		playMove != playableMoves[6] &&
		playMove != playableMoves[7] &&
		playMove != playableMoves[8]) {
			playMove = Math.round(Math.random() * (9 - 1) + 1);
		}
	
	
	if (amountTurns < 6) {
		
		gameBoardPositions[playMove].fill = 2;
	}

	
	if (amountTurns > 5) {
		var movablePositions = [];
		
		for (var i = 1; i < 10; i++) {
			if (gameBoardPositions[i].fill === 2) {
				movablePositions.push(i);
			} else {
				movablePositions.push(0);
			}
		}
		
		var movePosition = 10;
		
		while (
		movePosition != movablePositions[0] &&
		movePosition != movablePositions[1] &&
		movePosition != movablePositions[2] &&
		movePosition != movablePositions[3] &&
		movePosition != movablePositions[4] &&
		movePosition != movablePositions[5] &&
		movePosition != movablePositions[6] &&
		movePosition != movablePositions[7] &&
		movePosition != movablePositions[8]) {
			movePosition = Math.round(Math.random() * (9 - 1) + 1);
		}
		gameBoardPositions[movePosition].fill = 0;
		gameBoardPositions[playMove].fill = 2;
		
	}
	
};

var positionMarked = 0;

// POSITION NEDTRYCKT
var positionPressed = function(event) {
		var x = event.clientX;
		var y = event.clientY;
		for (var i = 1; i < 10; i++) {
			if (x > (gameBoardPositions[i].x - (700/3/2) * ((window.innerHeight - 25) / 800)) && 
				y > (gameBoardPositions[i].y - (700/3/2) * ((window.innerHeight - 25) / 800)) && 
				x < ((gameBoardPositions[i].x - (700/3/2) * ((window.innerHeight - 25) / 800)) + (700/3) * ((window.innerHeight - 25) / 800)) && 
				y < ((gameBoardPositions[i].y - (700/3/2) * ((window.innerHeight - 25) / 800)) + (700/3) * ((window.innerHeight - 25) / 800))) {
				
				// Placera ut pjäserna
				if (amountTurns < 6 && gameBoardPositions[i].fill === 0 && whosTurn === 1) {	
					gameBoardPositions[i].fill = 1; 
					whosTurn = 2;
					amountTurns++;
					break;
				}
			
				
				if (amountTurns > 5 && positionMarked === 0 && gameBoardPositions[i].fill === 1 && whosTurn === 1) {
					gameBoardPositions[i].marked = true;
					positionMarked = i;
					break;
				} else if (amountTurns > 5 && positionMarked > 0 && gameBoardPositions[i].fill === 1 && whosTurn === 1) {
					gameBoardPositions[positionMarked].marked = false;
					positionMarked = i;
					gameBoardPositions[positionMarked].marked = true;
					break; 
				}else if (amountTurns > 5 && positionMarked > 0 && gameBoardPositions[i].fill === 0 && whosTurn === 1) {
					gameBoardPositions[i].fill = 1;
					gameBoardPositions[positionMarked].marked = false;
					gameBoardPositions[positionMarked].fill = 0;
					positionMarked = 0;
					whosTurn = 2;
					amountTurns++;
					break;
				}
				
			}	
		}

	};
			
function addMouseEventListener(displayDomElement) {
	document.addEventListener("click", function(e) {
	positionPressed(e);

	
});
}