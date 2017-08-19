/* global $ */
/* global Game */
/* global Board */
/* global HumanPlayer */
/* global ComputerPlayer */
/* global Interface */

$(function() {
    
    // game loads
    const game = new Game();
    const board = new Board();
    const human = new HumanPlayer();
    const ai = new ComputerPlayer();
    const ui = new Interface();
    
    function reset(gameState) {
        game.reset();
        board.reset();
        ui.reset(gameState);
    }
    
    function makeMove(turn, id) {
    // check if it's the human's turn
        if (game[turn] === 'human') {
            human.makeMove(game, board, id, ui);
        }
        else {
            // if it's the computer's turn
            ai.makeMove(game, board, id, ui);
        }
        
        // check if terminal
        if (board.isTerminal()) {
            endGame();
        }
        
        // advance the turn
        game.advanceTurn();
        ui.updateTurn();
    }
    
    function endGame() {
        // increment appropriate win or draw count
        game.addResult(game.turn);
        
        // update the ui
        ui.displayMsg(`${game.turn} wins!`);
        ui.updateScoreboard(game.xWins, game.oWins, game.draws);
        
        // wait 2 seconds, reset the game
        setTimeout(() => reset(game), 2000);
    }
    
    //*
    // GAME LOGIC
    //*
        
    // listen for tile switch
    $('#switchTile').on('click', () => {
        game.switchTile();
        reset(game);
    });
    
    // listen for mode switch
    $('#changeMode').on('click', () => {
        game.switchMode();
        reset(game);
    });
    
    // prevent manual turn changes
    $('#turnSlider').on('click', (e) => {
        e.preventDefault();
    });
    
    $('td').on('click', function(e) {
        const id = e.target.id;
        
        // check if it's multiplayer
        if (game.players === 2) {
            
            // check whose turn it is
            if (game.turn === 'X') {
                makeMove('X', id);
            }
            else {
                // if it's O's turn
                makeMove('O', id);
            }
        }
        else {
            // if it's single player
            game.X = 'human';
            game.O = 'human';
            
            // listen for human moves
            makeMove(game.turn, id);
        }
    });
})