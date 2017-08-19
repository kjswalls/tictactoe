    //*
    // HUMAN PLAYER
    //*
    
    /* global $ */
    
    function HumanPlayer() {
        this.tile = 'X';
    }
    
    HumanPlayer.prototype.makeMove = function(game, board, id, ui) {
        // if the square is empty
        if ($(this).text() === '') {
               
            // update the board
            board.placeTile(game.turn, id);
            ui.updateBoard(board.grid, game.turn);
          }
          else {
             ui.displayMsg('Please choose an empty space');  
          }
    };