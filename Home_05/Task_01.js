const WHITE = document.createElement('div');
WHITE.classList.add('white_block');
const BLACK = document.createElement('div');
BLACK.classList.add('black_block');


function generateChessBoard() {
    const chessBoard = document.createElement('div');
    chessBoard.classList.add('chess_board');
    for (let j = 'A'.charCodeAt(); j < 'H'.charCodeAt() + 1; j++){
        const line = document.createElement('div');
        line.classList.add('line');
        for (let k = 1; k < 9; k++){
            const block = document.createElement('div');
            block.classList.add('block');
            if ((k % 2 === 0 && j % 2 === 0) || (k % 2 === 1 && j % 2 === 1)) {
                block.classList.add('white_block');
            } else {
                block.classList.add('black_block');
            }
            if (j === 'A'.charCodeAt()){
                block.insertAdjacentHTML(`afterbegin`, `
                    <p class="text_num text">${k}</p>
                `)
            }
            if (k === 1){
                block.insertAdjacentHTML(`beforeend`, `
                    <p class="text_let text">${String.fromCharCode(j)}</p>
                `)
            }

            line.appendChild(block);
        }
        chessBoard.appendChild(line);
    }
    document.body.appendChild(chessBoard);
}


generateChessBoard();