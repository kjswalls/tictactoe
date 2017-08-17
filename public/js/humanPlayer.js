    //*
    // HUMAN PLAYER
    //*
    
    /* global $ */
    
    function HumanPlayer() {
        this.tile = 'X';
    }
    
    HumanPlayer.prototype.makeMove = function(game, board, ui) {
        // listen for clicks on the board
        $('td').on('click', function(e) {
          const id = e.target.id;
           
          // if the square is empty
          if ($(this).text() === '') {
               
              // update the board
              board.placeTile(game.turn, id);
              console.log(board);
              ui.updateBoard(board.grid);
               
              // advance the turn
              game.advanceTurn();
              ui.updateTurn();
          }
          else {
             ui.displayMsg('Please choose an empty space');  
          }
        });  
    };