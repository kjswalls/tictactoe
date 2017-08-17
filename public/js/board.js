    //*
    // BOARD
    //*
    
    function Board() {
        this.grid = ['E','E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];
        this.winner = '';
    }
    
    Board.prototype.placeTile = function(turn, index) {
        // check to see if the tile is empty
        if (this.grid[index] !== 'E') {
            this.grid[index] = turn;
        }
    };
    
    Board.prototype.isTerminal = function() {
        const grid = this.grid;
        
        function checkSequence(t1, t2, t3) {
            const arr = [t1, t2, t3];
            return arr.every(i => i == arr[0] && i !== 'E');
        }
        
        function checkRows() {
            return checkSequence(grid[0], grid[1], grid[2]) ||
            checkSequence(grid[3], grid[4], grid[5]) ||
            checkSequence(grid[6], grid[7], grid[8]);
        }
        
        function checkColumns() {
            return checkSequence(grid[0], grid[3], grid[6]) ||
            checkSequence(grid[1], grid[4], grid[7]) ||
            checkSequence(grid[2], grid[5], grid[8]); 
        }
        
        function checkDiags() {
            return checkSequence(grid[0], grid[4], grid[8]) ||
            checkSequence(grid[2], grid[4], grid[6]); 
        }
        
        return checkRows() || checkColumns() || checkDiags();
    };
    
    Board.prototype.reset = function() {
        this.grid = ['E','E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];
        this.winner = ''; 
    };
    
    