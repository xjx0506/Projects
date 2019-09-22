var cols,rows;
var w = 10;
var grid = [];
var current;
var stack = [];
function setup(){
    createCanvas(400,400);
    //number of cells
    cols = floor(width/w);  
    rows = floor(height/w);
    
    for(j = 0; j < rows; j++){
        for(i = 0; i < cols; i++){
            //create cell objects and push them all into the array
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }

    // mark the first cell as the current cell being visited
    current = grid[0];
    
}



//draw the cells out
function draw(){
    background(51);
    frameRate(55880);
    for(var i = 0; i < grid.length; i++){
        //show is a function that draws each cell
        grid[i].show(); 
    }
    
    current.visited = true;
    //highlight the current cell
    current.highLight();
    //checkNeighbors() find a random unvisited neighbor and return it
    var next = current.checkNeighbors();
    //if next cell is a defined cell

    if(next){
        next.visited = true;
        //step2 
        removeWalls(current, next);
        //step3
        stack.push(current);
        //step4
        current = next;
    } else if(stack.length > 0){
        var cell = stack.pop();
        current = cell;

    }
}

function index(i, j){
    //edge cases, if any i,j go beyond the grid, make it undefined
    if(i < 0 || j < 0 || i > cols - 1 || j > rows- 1){
        return -1;
    }
    return i + j * cols;
}

/*
each cell is an object has the following:
    i: column number
    j: row number
    x, y: coordinates of each cell
    show(): draw each cell one by one
    walls: a boolean array that indicates if there are walls around a cell
    初始化为四周都有
    四周: top right bottom left
    visited : each cell is unvisited at the beginning
*/
function Cell(i,j){
    this.i = i;
    this.j = j;
    this.walls = [true,true,true,true]; 
    this.visited = false;

    this.show = function(){
        var x = this.i*w;
        var y = this.j*w;
        stroke(255);
      
        //to draw a single cell:top right bottom left
        if(this.walls[0]){
            line(x,y,x+w,y) 
        }
        if(this.walls[1]){
            line(x+w,y,x+w,y+w) 
        }
        if(this.walls[2]){
            line(x+w,y+w,x,y+w)
        }
        if(this.walls[3]){
            line(x,y+w,x,y);
        }
        //if this cell is visited then fill it with a different color and get rid of the walls
        if(this.visited){ 
            noStroke();
            fill(255,0,255,80);
            rect(x, y, w, w);
        }
         
    }
    this.highLight = function(){
        var x = this.i*w;
        var y = this.j*w;
        noStroke(); 
        fill(0,0,255,100);
        rect(x, y, w, w);
    }
    //check the neighbors of a cell to see if they have already been visited
    this.checkNeighbors = function(){
        var neighbors = [];

        var top    = grid[index(i, j-1)];
        var right  = grid[index(i+1, j)];
        var bottom = grid[index(i, j+1)];
        var left   = grid[index(i-1, j)];

        //if top is a real thing and it hasn't been visited
        if(top && !top.visited){
            neighbors.push(top);
        }
        if(right && !right.visited){
            neighbors.push(right);
        }
        if(bottom && !bottom.visited){
            neighbors.push(bottom);
        }
        if(left && !left.visited){
            neighbors.push(left);
        }

         //choose a random neighbor
        if(neighbors.length > 0){
            var r = floor(random(0, neighbors.length));
            return neighbors[r];
        }
        else{
            return undefined;
        }

    }

    
}

/*remove walls between the current cell and the next cell*/
function removeWalls(a, b){
    var x = a.i - b.i;
    var y = a.j - b.j;
    
    if(x === 1){
        a.walls[3] = false;
        b.walls[1] = false;
        // console.log(x)
    }
    else if(x === -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }

    if(y === 1){
        a.walls[0] = false;
        b.walls[2] = false;
    }
    else if(y === -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }


}
