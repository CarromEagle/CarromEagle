const board = document.getElementById('board');
const context = board.getContext("2d");

/*
* draws the board step-by-step
*/
function drawBoard()
{

	// STEP-1:: clear the context and get the board dimensions
	var size  = parseInt(getComputedStyle(board).width, 10);

	// STEP-2:: draw the playing area
	context.fillStyle = "#ffffae";
	context.fillRect(40, 40, size-80, size-80);
	context.stroke();


	// STEP-3:: draw pockets
	// context.fillStyle = "#444";
	// context.arc(74, 74, 28, 0, 2 * Math.PI, true);
	// context.fill();
}

// call first time initially
drawBoard();


// call whenever window is resized
window.addEventListener('resize', function(event)
{
        context.clearRect(40, 40, size-95, size-95);
	drawBoard();
}, true);
