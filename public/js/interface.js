    //*
    // INTERFACE
    //*
    
    /* global $ */
    
    
    function Interface() {
        this.defaultGrid = ['E','E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];
    }
    
    Interface.prototype.updateTurn = function() {
        $('#turnSlider').trigger('click');
    };
    
    Interface.prototype.updateTiles = function(X, O) {
        $('#xAssign').text(`: ${X}`);
        $('#oAssign').text(`: ${O}`);
    };
    
    Interface.prototype.updateScoreboard = function(xWins, oWins, draws) {
        $('#xWins').text(`${xWins} wins`);
        $('#oWins').text(`${oWins} wins`);
        $('#draws').text(`${draws} draws`);
    };
    
    Interface.prototype.updateMode = function(players) {
        $('#changeMode').text(`${players} player`);
    };
    
    Interface.prototype.updateBoard = function(grid) {
       console.log(grid);
       for (let i = 0; i < grid.length; i++) {
           if (grid[i] !== 'E') {
            $(`#${i}`).text(grid[i]);               
           }
       } 
    };
    
    Interface.prototype.displayMsg = function(msg) {
        let message= $('#msg');
        message.text(msg);
        
        // clear message after 2.5 seconds
        setTimeout(() => message.text(''), 2500);
    };
    
    Interface.prototype.reset = function(game) {
        this.updateBoard(this.defaultGrid);
        this.updateTiles(game.X, game.O);
        this.updateScoreboard(game.xWins, game.oWins, game.draws);
        this.updateMode(game.players);
    };