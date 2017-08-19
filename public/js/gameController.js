    //*
    // GAME STATE
    //*
    
    function Game() {
        this.turn = 'X';
        this.oWins = 0;
        this.xWins = 0;
        this.draws = 0;
        this.players = 1;
        this.X = 'human';
        this.O = 'AI';
    }
    
    Game.prototype.advanceTurn = function() {
        if (this.turn === 'X') {
            this.turn = 'O';
        }
        else {
            this.turn = 'X';
        }
    };
    
    Game.prototype.addResult = function(winner) {
       switch (winner) {
           case 'X':
               this.xWins++;
               break;
            case 'O':
               this.oWins++;
               break;
            case 'draw':
                this.draws++;
                break;
       }
    };
    
    Game.prototype.switchMode = function() {
        if (this.players === 1) {
            this.players = 2;
        }
        else {
            this.players = 1;
        }
    };
    
    Game.prototype.reset = function() {
        this.turn = 'X';
    };
    
    Game.prototype.switchTile = function() {
      if (this.O === 'AI') {
          this.X = 'AI';
          this.O = 'human';
      }
      else {
          this.X = 'human';
          this.O = 'AI';
      }
    };
    

    