var computerPlay = function() {

	var playMove = 10;

	// format:off
	var winSces = [ {
		firstPos : 1,
		secondPos : 2,
		thirdPos : 3}, {
		firstPos : 4,
		secondPos : 5,
		thirdPos : 6
	}, {
		firstPos : 7,
		secondPos : 8,
		thirdPos : 9
	}, {
		firstPos : 1,
		secondPos : 4,
		thirdPos : 7
	}, {
		firstPos : 2,
		secondPos : 5,
		thirdPos : 8
	}, {
		firstPos : 3,
		secondPos : 6,
		thirdPos : 9
	}, {
		firstPos : 1,
		secondPos : 5,
		thirdPos : 9
	}, {
		firstPos : 3,
		secondPos : 5,
		thirdPos : 7
	} ]

	if (amountTurns === 1) {
		if (gameBoardPositions[5].fill === 0) {
			gameBoardPositions[5].fill = 2;
		} else { // if (gameBoardPositions[5].fill === 1) {
			gameBoardPositions[1].fill = 2;
		}
	}
	if (amountTurns > 2 && amountTurns < 6) {
		for (var i = 0; i < winSces.length; i++) {
			console.log("14");
			if (gameBoardPositions[winSces[i].firstPos].fill === 0
					&& gameBoardPositions[winSces[i].secondPos].fill === 2
					&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
				playMove = winSces[i].firstPos;
				break;
			} else if (gameBoardPositions[winSces[i].firstPos].fill === 2
					&& gameBoardPositions[winSces[i].secondPos].fill === 0
					&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
				playMove = winSces[i].secondPos;
				break;
			} else if (gameBoardPositions[winSces[i].firstPos].fill === 2
					&& gameBoardPositions[winSces[i].secondPos].fill === 2
					&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
				playMove = winSces[i].thirdPos;
				break;
			}
		}

		if (playMove > 9) {
			for (var i = 0; i < winSces.length; i++) {
				console.log("15");
				if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 1
						&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
					playMove = winSces[i].firstPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 1
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
					playMove = winSces[i].secondPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 1
						&& gameBoardPositions[winSces[i].secondPos].fill === 1
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
					playMove = winSces[i].thirdPos;
					break;
				}
			}
		}

		if (playMove > 9) {
			for (var i = 0; i < winSces.length; i++) {
				console.log("16");
				if (gameBoardPositions[winSces[i].firstPos].fill === 2
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
					playMove = winSces[i].secondPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 2
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
					playMove = winSces[i].firstPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
					playMove = winSces[i].secondPos;
					break;
				}
			}
		}

		if (playMove > 9) {
			for (var i = 0; i < winSces.length; i++) {
				console.log("17");
				if (gameBoardPositions[winSces[i].firstPos].fill === 1
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
					playMove = winSces[i].secondPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 1
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
					playMove = winSces[i].firstPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
					playMove = winSces[i].secondPos;
					break;
				}
			}
		}

		if (playMove > 9) {
			var playableMoves = []
			for (var i = 1; i < 10; i++) {
				console.log("18");
				if (gameBoardPositions[i].fill === 0) {
					playableMoves.push(i);
				} else {
					playableMoves.push(0);
				}
			}
			playMove = 10;
			while (playMove != playableMoves[0] && playMove != playableMoves[1]
					&& playMove != playableMoves[2]
					&& playMove != playableMoves[3]
					&& playMove != playableMoves[4]
					&& playMove != playableMoves[5]
					&& playMove != playableMoves[6]
					&& playMove != playableMoves[7]
					&& playMove != playableMoves[8]) {
				playMove = Math.round(Math.random() * (9 - 1) + 1);
			}
		}

		gameBoardPositions[playMove].fill = 2;
	}

	if (amountTurns > 5) {
		// SKAPAR VARIABLERNA SOM SKA AVGÖRA VILKEN POSITION SOM ÄR BÄST ATT
		// FLYTTA
		var movablePositions = [];
		var movePosition = 10;

		// LÄGGER I POSITIONERNA SOM KAN FLYTTAS I VARIABLERNA
		for (var i = 1; i < 10; i++) {
			console.log("1");
			if (gameBoardPositions[i].fill === 2) {
				movablePositions.push(i);
			}
		}

		for (var i = 0; i < winSces.length; i++) {
			console.log("2");
			if (gameBoardPositions[winSces[i].firstPos].fill === 0
					&& gameBoardPositions[winSces[i].secondPos].fill === 2
					&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {

				if (movablePositions[0] != winSces[i].secondPos
						&& movablePositions[0] != winSces[i].thirdPos) {
					movePosition = movablePositions[0];
					break;
				} else if (movablePositions[1] != winSces[i].secondPos
						&& movablePositions[1] != winSces[i].thirdPos) {
					movePosition = movablePositions[1];
					break;
				} else if (movablePositions[2] != winSces[i].secondPos
						&& movablePositions[2] != winSces[i].thirdPos) {
					movePosition = movablePositions[2];
					break;
				}

			} else if (gameBoardPositions[winSces[i].firstPos].fill === 2
					&& gameBoardPositions[winSces[i].secondPos].fill === 0
					&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {

				if (movablePositions[0] != winSces[i].firstPos
						&& movablePositions[0] != winSces[i].thirdPos) {
					movePosition = movablePositions[0];
					break;
				} else if (movablePositions[1] != winSces[i].firstPos
						&& movablePositions[1] != winSces[i].thirdPos) {
					movePosition = movablePositions[1];
					break;
				} else if (movablePositions[2] != winSces[i].firstPos
						&& movablePositions[2] != winSces[i].thirdPos) {
					movePosition = movablePositions[2];
					break;
				}

			} else if (gameBoardPositions[winSces[i].firstPos].fill === 2
					&& gameBoardPositions[winSces[i].secondPos].fill === 2
					&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {

				if (movablePositions[0] != winSces[i].firstPos
						&& movablePositions[0] != winSces[i].secondPos) {
					movePosition = movablePositions[0];
					break;
				} else if (movablePositions[1] != winSces[i].firstPos
						&& movablePositions[1] != winSces[i].secondPos) {
					movePosition = movablePositions[1];
					break;
				} else if (movablePositions[2] != winSces[i].firstPos
						&& movablePositions[2] != winSces[i].secondPos) {
					movePosition = movablePositions[2];
					break;
				}
			}
		}
		// OM DET ÄR NÅGON POSITION SOM HINDRAR MOTSTÅNDAREN FRÅN ATT VINNA I
		// NÄSTA OMGÅNG SÅ TAR DEN HÄR FUNKTIONEN BORT DEN FRÅN FLYTTBARA
		// POSITIONER
		for (var i = 0; i < movablePositions.length; i++) {
			console.log("3");
			for (var i = 0; i < winSces.length; i++) {
				console.log("4");
				if (movablePositions[i] === winSces[i].firstPos) {
					if (gameBoardPositions[winSces[i].secondPos].fill === 1
							&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
						movablePositions.splice(i, 1);
						break;
					}
				} else if (movablePositions[i] === winSces[i].secondPos) {
					if (gameBoardPositions[winSces[i].firstPos].fill === 1
							&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
						movablePositions.splice(i, 1);
						break;
					}
				} else if (movablePositions[i] === winSces[i].thirdPos) {
					if (gameBoardPositions[winSces[i].firstPos].fill === 1
							&& gameBoardPositions[winSces[i].secondPos].fill === 1) {
						movablePositions.splice(i, 1);
						break;
					}
				}
			}
		}

		var saveMovablePositions = movablePositions;

		// TESTAR OM FLYTTANDET AV EN POSITION TAR BORT EN VINSTCHANS DÄR DATORN
		// HAR TVÅ IRAD OCH DEN TREDJE ÄR FRI
		if (movablePositions.length > 2) {
			for (var i = 0; i < movablePositions.length; i++) {
				console.log("5");
				for (var i = 0; i < winSces.length; i++) {
					console.log("6");
					if (movablePositions[i] === winSces[i].firstPos) {
						if (gameBoardPositions[winSces[i].secondPos].fill === 2
								&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
							movablePositions.splice(i, 1);
							break;
						} else if (gameBoardPositions[winSces[i].secondPos].fill === 0
								&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
							movablePositions.splice(i, 1);
							break;
						}
					} else if (movablePositions[i] === winSces[i].secondPos) {
						if (gameBoardPositions[winSces[i].firstPos].fill === 2
								&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
							movablePositions.splice(i, 1);
							break;
						} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
								&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
							movablePositions.splice(i, 1);
							break;
						}
					} else if (movablePositions[i] === winSces[i].thirdPos) {
						if (gameBoardPositions[winSces[i].secondPos].fill === 2
								&& gameBoardPositions[winSces[i].firstPos].fill === 0) {
							movablePositions.splice(i, 1);
							break;
						} else if (gameBoardPositions[winSces[i].secondPos].fill === 0
								&& gameBoardPositions[winSces[i].firstPos].fill === 2) {
							movablePositions.splice(i, 1);
							break;
						}
					}
				}
			}
		}
		// TESTAR OM FLYTTANDET AV EN POSITION TAR BORT EN VINSTCHANS DÄR DATORN
		// HAR TVÅ IRAD OCH DEN TREDJE ÄR TAGEN AV MOTSTÅNDAREN
		if (movablePositions.length > 2) {
			for (var i = 0; i < movablePositions.length; i++) {
				console.log("7");
				for (var i = 0; i < winSces.length; i++) {
					console.log("8");
					if (movablePositions[i] === winSces[i].firstPos) {
						if (gameBoardPositions[winSces[i].secondPos].fill === 2
								&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
							movablePositions.splice(i, 1);
							break;
						} else if (gameBoardPositions[winSces[i].secondPos].fill === 1
								&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
							movablePositions.splice(i, 1);
							break;
						}
					} else if (movablePositions[i] === winSces[i].secondPos) {
						if (gameBoardPositions[winSces[i].firstPos].fill === 2
								&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
							movablePositions.splice(i, 1);
							break;
						} else if (gameBoardPositions[winSces[i].firstPos].fill === 1
								&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
							movablePositions.splice(i, 1);
							break;
						}
					} else if (movablePositions[i] === winSces[i].thirdPos) {
						if (gameBoardPositions[winSces[i].secondPos].fill === 2
								&& gameBoardPositions[winSces[i].firstPos].fill === 1) {
							movablePositions.splice(i, 1);
							break;
						} else if (gameBoardPositions[winSces[i].secondPos].fill === 1
								&& gameBoardPositions[winSces[i].firstPos].fill === 2) {
							movablePositions.splice(i, 1);
							break;
						}
					}
				}
			}
		}
		// IFALL DET INTE FINNS NÅGRA DRAG SOM DATORN KAN GÖRA SOM INTE LEDER
		// TILL FÖRLUST
		if (movePosition > 9) {
			if (movablePositions.length < 1) {
				console.log("Computer has no playable moves");
			}

			if (movablePositions.length > 1) {

				if (movablePositions.length === 2) {
					movablePositions.push(0);
				}

				movePosition = 10;
				while (movePosition != movablePositions[0]
						&& movePosition != movablePositions[1]
						&& movePosition != movablePositions[2]) {
					movePosition = Math.round(Math.random() * (9 - 1) + 1);
				}
			}

			if (movablePositions.length === 1) {
				movePosition = movablePositions[0];
			}
		}
		// TAR BORT POSITIONEN SOM SKA FLYTTAS
		gameBoardPositions[movePosition].fill = 0;

		// BÖRJAR TESTA VAR POSITIONEN KAN FLYTTAS

		// TESTAR OM DET FINNS NÅGRA FÖRFLYTTNINGAR SOM LEDER TILL VINST
		for (var i = 0; i < winSces.length; i++) {
			console.log("9");
			if (gameBoardPositions[winSces[i].firstPos].fill === 0
					&& gameBoardPositions[winSces[i].secondPos].fill === 2
					&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
				playMove = winSces[i].firstPos;
				break;
			} else if (gameBoardPositions[winSces[i].firstPos].fill === 2
					&& gameBoardPositions[winSces[i].secondPos].fill === 0
					&& gameBoardPositions[winSces[i].thirdPos].fill === 2) {
				playMove = winSces[i].secondPos;
				break;
			} else if (gameBoardPositions[winSces[i].firstPos].fill === 2
					&& gameBoardPositions[winSces[i].secondPos].fill === 2
					&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
				playMove = winSces[i].thirdPos;
				break;
			}
		}

		// TESTAR OM DET FINNS NÅGRA LUCKOR SOM LEDER TILL SEGER FÖR
		// MOTSTÅNDAREN
		if (playMove > 9) {
			for (var i = 0; i < winSces.length; i++) {
				console.log("10");
				if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 1
						&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
					playMove = winSces[i].firstPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 1
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 1) {
					playMove = winSces[i].secondPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 1
						&& gameBoardPositions[winSces[i].secondPos].fill === 1
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0) {
					playMove = winSces[i].thirdPos;
					break;
				}
			}
		}

		if (playMove > 9) {
			for (var i = 0; i < winSces.length; i++) {
				console.log("11");
				if (gameBoardPositions[winSces[i].firstPos].fill === 2
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0
						&& winSces[i].firstPos != movePosition
						&& winSces[i].secondPos != movePosition
						&& winSces[i].thirdPos != movePosition) {
					playMove = winSces[i].secondPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 2
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0
						&& winSces[i].firstPos != movePosition
						&& winSces[i].secondPos != movePosition
						&& winSces[i].thirdPos != movePosition) {
					playMove = winSces[i].firstPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 2
						&& winSces[i].firstPos != movePosition
						&& winSces[i].secondPos != movePosition
						&& winSces[i].thirdPos != movePosition) {
					playMove = winSces[i].secondPos;
					break;
				}
			}
		}

		if (playMove > 9) {
			for (var i = 0; i < winSces.length; i++) {
				console.log("12");
				if (gameBoardPositions[winSces[i].firstPos].fill === 1
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0
						&& winSces[i].firstPos != movePosition
						&& winSces[i].secondPos != movePosition
						&& winSces[i].thirdPos != movePosition) {
					playMove = winSces[i].secondPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 1
						&& gameBoardPositions[winSces[i].thirdPos].fill === 0
						&& winSces[i].firstPos != movePosition
						&& winSces[i].secondPos != movePosition
						&& winSces[i].thirdPos != movePosition) {
					playMove = winSces[i].firstPos;
					break;
				} else if (gameBoardPositions[winSces[i].firstPos].fill === 0
						&& gameBoardPositions[winSces[i].secondPos].fill === 0
						&& gameBoardPositions[winSces[i].thirdPos].fill === 1
						&& winSces[i].firstPos != movePosition
						&& winSces[i].secondPos != movePosition
						&& winSces[i].thirdPos != movePosition) {
					playMove = winSces[i].secondPos;
					break;
				}
			}
		}

		if (playMove > 9) {
			var playableMoves = []
			for (var i = 1; i < 10; i++) {
				console.log("13");
				if (gameBoardPositions[i].fill === 0) {
					playableMoves.push(i);
				} else {
					playableMoves.push(0);
				}
			}
			playMove = 10;
			while (playMove != playableMoves[0] && playMove != playableMoves[1]
					&& playMove != playableMoves[2]
					&& playMove != playableMoves[3]
					&& playMove != playableMoves[4]
					&& playMove != playableMoves[5]
					&& playMove != playableMoves[6]
					&& playMove != playableMoves[7]
					&& playMove != playableMoves[8]) {
				console.log("a1");
				playMove = Math.round(Math.random() * (9 - 1) + 1);
			}
		}

		gameBoardPositions[playMove].fill = 2;

	}
};