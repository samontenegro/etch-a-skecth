const board = document.querySelector('#board');

const boardsize = 600;
board.style.height = `${boardsize}px`;
board.style.width = `${boardsize}px`;

const dim_default = 10;

function initializeBoard () {
	let dim = parseInt(prompt('How many rows do you want for your grid? :)'));
	if (!dim) {dim = dim_default}
	wipeBoard(); 
	clearBoard(); 
	fillBoard(dim);
}


function makeRow (N) {
	/* This function returns a row with N cells,
		that is, a div of class 'pix-row' with N
		children of class 'pix-row'
	*/
	let size = (boardsize - (N+1))/N;
	let row = document.createElement('div');
	row.classList.add('pix-row');
	row.style.height = `${size + ((N+1)/N)}px`;
	row.style.width = `${N*size + (N+1)	}px`;

	for (i=0; i < N; i++) {
		let box = document.createElement('div');
		box.classList.add('pix');

		box.style.height = `${size}px`;
		box.style.width = `${size}px`;

		row.appendChild(box);
	}

	return row;
}

function fillBoard (N) {
	/* In a similar fashion to makeRow,
	   this function fills the div 'board' with N rows,
	   each with N children
	*/

	for (j=0; j < N; j++) {
		let row = makeRow(N);
		board.appendChild(row);
	}

	sketchEnable()

}

function clearBoard () {
	while (board.lastChild) {
		if (board.childElementCount === 1) {break}
		board.removeChild(board.lastChild);
	}

}

function sketchEnable() {
	let pixs = document.querySelectorAll('.pix');
	pixs.forEach((pix) => pix.addEventListener('mouseover',(e) => blackColor(e.target)));
}

function blackColor(elem) {
	elem.style.backgroundColor = 'rgb(0,0,0)';
}

function randColor (elem) {
	elem.style
}

function wipeBoard () {
	let pixs = document.querySelectorAll('.pix');
	pixs.forEach((pix) => pix.style.backgroundColor = 'rgb(255,255,255)');
}


fillBoard(dim_default)
