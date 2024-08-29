const gameBoard = (() => {
    let board = [];
    for (let i = 0; i <= 8; i++) {
        board[i] = document.createElement('div');
        board[i].classList.add('box');
        document.getElementById('container').appendChild(board[i]);
        
    }
        
    return {board};
})();

function player(name, win) {

    return{name}
}
let player1 = player('X');
let player2 = player    ('O');
let playerTurn = 0;
let turnText = document.getElementById('turn');

const gameState = ((board, p1, p2, turn)=>{
    board.forEach(box => {
        box.addEventListener('click',()=>{
            
            if(turn == 0 && box.innerText == ''){
                //put x in the clicked square
                box.innerHTML = p1.name;
                //checks for a match
                //horizontal match
                if(board[0].innerText === board[1].innerText && board[1].innerText === board[2].innerText && board[0].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                    box.removeEventListener('click');
                }
                if(board[3].innerText === board[4].innerText && board[4].innerText === board[5].innerText && board[3].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                }
                if(board[6].innerText === board[7].innerText && board[7].innerText === board[8].innerText && board[6].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                }
                //veritcal match
                if(board[0].innerText === board[3].innerText && board[3].innerText === board[6].innerText && board[0].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                }
                if(board[1].innerText === board[4].innerText && board[4].innerText === board[7].innerText && board[1].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                }
                if(board[2].innerText === board[5].innerText && board[5].innerText === board[8].innerText && board[2].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                }
                //diagonal match
                if(board[0].innerText === board[4].innerText && board[4].innerText === board[8].innerText && board[0].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                }
                if(board[6].innerText === board[4].innerText && board[4].innerText === board[2].innerText && board[6].innerText != ''){
                    turnText.innerText = `${p1.name} wins!!!`;
                }
                //next persons turn
                turn++;
            } 
            if(turn == 1 && box.innerText == ''){
                //put x in the clicked square
                box.innerHTML = p2.name;
                //checks for a match
                //horizontal match
                if(board[0].innerText === board[1].innerText && board[1].innerText === board[2].innerText && board[0].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                if(board[3].innerText === board[4].innerText && board[4].innerText === board[5].innerText && board[3].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                if(board[6].innerText === board[7].innerText && board[7].innerText === board[8].innerText && board[6].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                //veritcal match
                if(board[0].innerText === board[3].innerText && board[3].innerText === board[6].innerText && board[0].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                if(board[1].innerText === board[4].innerText && board[4].innerText === board[7].innerText && board[1].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                if(board[2].innerText === board[5].innerText && board[5].innerText === board[8].innerText && board[2].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                //diagonal match
                if(board[0].innerText === board[4].innerText && board[4].innerText === board[8].innerText && board[0].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                if(board[6].innerText === board[4].innerText && board[4].innerText === board[2].innerText && board[6].innerText != ''){
                    turnText.innerText = `${p2.name} wins!!!`;
                }
                //next persons turn
                turn--;
            }
        })
    });

})(gameBoard.board, player1, player2, playerTurn);
