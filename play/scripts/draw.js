// get some required variables
const board = document.getElementById('board');
const context = board.getContext("2d");


/*
* draws the board step-by-step
*/
function drawBoard()
{
	// STEP-1:: get the board dimensions and clear the context
	var size  = board.width;
	context.clearRect(0, 0, size, size);

	// STEP-2:: draw the playing area
	context.fillStyle = "#ffffae";
	context.fillRect(40, 40, size-80, size-80);
	context.stroke();


	// STEP-3:: draw pockets
	context.fillStyle = "#444";
	
	// top-right
	context.beginPath()
	context.arc(size-68, 68, 28, 0, 2 * Math.PI, true);
	context.fill();

	// bottom-left
	context.beginPath()
	context.arc(68, size-68, 28, 0, 2 * Math.PI, true);
	context.fill();
	
	// top-left
	context.beginPath()
	context.arc(68, 68, 28, 0, 2 * Math.PI, true);
	context.fill();

	// bottom-right
	context.beginPath()
	context.arc(size-68, size-68, 28, 0, 2 * Math.PI, true);
	context.fill();

}

// call initially
drawBoard();
