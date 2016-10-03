var ballTwoX = 100; //ball two
var ballTwoY = 100; //ball two
var ballX = 75;
var ballY = 75;
var ballSpeedX = 2;
var ballSpeedY = 3;
var ballTwoSpeedX = 3;
var ballTwoSpeedY = 2.5;
    
const BRICK_W = 80;
const BRICK_H = 20; 
const BRICK_GAP = 2;
const BRICK_COLS = 18;
const BRICK_ROWS = 12; 
var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;

const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
const PADDLE_DIST_FROM_EDGE = 60;
var paddleX = 400;

var canvas, canvasContext;
    
var mouseX = 0;
var mouseY = 0;

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	paddleX = mouseX - PADDLE_WIDTH/2;
    
    //CHEAT / hack to test ball in any position
    /* ballX = mouseX;
    ballY = mouseY;
    ballSpeedX = 2;
    ballSpeedY = -2; */
}
    
function brickReset() {
    bricksLeft = 0;
    var i;
    for(i=0;i<3 * BRICK_COLS;i++){
        brickGrid[i] = false;
    }
    for(;i<BRICK_COLS * BRICK_ROWS;i++){
        brickGrid[i] = true;
        bricksLeft++;
    } // end of for each brick
} //end of brickReset funct

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
    
    colorRect(0,0, canvas.width,canvas.height, 'black');
}

document.getElementById('startGame').onclick = function(){
    
    $("#startGame").hide(this);
    
    var framesPerSecond = 50;
	setInterval(updateAll, 1000/framesPerSecond);

	canvas.addEventListener('mousemove', updateMousePos);
    
    brickReset();
    ballReset();
    ballTwoReset();  
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
    
	ballMove();
    ballTwoMove();
    
    ballBrickHandling();
    
    ballPaddleHandling();
}
   
function rowColToArrayIndex(col, row) {
    return col + BRICK_COLS * row;
}   
    
