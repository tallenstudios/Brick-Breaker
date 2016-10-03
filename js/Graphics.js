function drawBricks() {
    
    for(var eachRow=0;eachRow<BRICK_ROWS;eachRow++) {
        for(var eachCol=0;eachCol<BRICK_COLS;eachCol++){
            
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            
            if(brickGrid[arrayIndex]){
                colorRect(BRICK_W*eachCol,BRICK_H*eachRow, 
                    BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'blue');
            } //end of is the brick here
        } //end of for each brick
    } //end of for each row
} // end of drawBricks func

function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen

	colorCircle(ballX,ballY, 10, 'red'); // draw ball
    colorCircle(ballTwoX,ballTwoY, 10, 'green'); // draw ball two

	colorRect(paddleX, canvas.height-PADDLE_DIST_FROM_EDGE,
				PADDLE_WIDTH, PADDLE_THICKNESS, 'white');
    
    drawBricks();
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorCircle(centerX,centerY, radius, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY, 10, 0,Math.PI*2, true);
	canvasContext.fill();
}
    
function colorText(showWords, textX,textY, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX,textY);
}