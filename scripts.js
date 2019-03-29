const board = document.querySelector('#board');

const boardsize = 500;
board.style.height = `${boardsize}px`;
board.style.width = `${boardsize}px`;

const dim = 10;

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

}

function clearBoard () {
	while (board.firstChild) {
		board.removeChild(board.firstChild);
	}

}

fillBoard(dim)
