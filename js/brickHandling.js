function isBrickAtColRow(col, row){
    if(col >= 0 && col < BRICK_COLS && 
        row >= 0 && row < BRICK_ROWS){
        var brickIndexUnderUnderCoord = rowColToArrayIndex(col, row);
        return brickGrid[brickIndexUnderUnderCoord];
    }else{
        return false;
    } 
}
    
function ballBrickHandling() {
    var ballBrickCol = Math.floor(ballX / BRICK_W);
    var ballBrickRow = Math.floor(ballY / BRICK_H);
    var ballTwoBrickCol = Math.floor(ballTwoX / BRICK_W);
    var ballTwoBrickRow = Math.floor(ballTwoY / BRICK_H);
    var brickIndexUnderBall = rowColToArrayIndex(ballBrickCol, ballBrickRow);
    var brickIndexUnderBallTwo = rowColToArrayIndex(ballTwoBrickCol, ballTwoBrickRow);
    
    if(ballBrickCol >= 0 && ballBrickCol < BRICK_COLS &&
        ballBrickRow >= 0 && ballBrickRow < BRICK_ROWS) {
        
        if(isBrickAtColRow( ballBrickCol,ballBrickRow )) {
            brickGrid[brickIndexUnderBall] = false;
            bricksLeft--;
            
            var prevBallX = ballX - ballSpeedX;
            var prevBallY = ballY - ballSpeedY;
            var prevBrickCol = Math.floor(prevBallX / BRICK_W);
            var prevBrickRow = Math.floor(prevBallY / BRICK_H);
            
            var bothTestsFailed = true;
            
            if(prevBrickCol != ballBrickCol) {
                if(isBrickAtColRow(prevBrickCol, ballBrickRow) == false) {
                    ballSpeedX *= -1;
                    bothTestsFailed = false;
                }
            }
            if(prevBrickRow != ballBrickRow) {
                if(isBrickAtColRow(ballBrickCol, prevBrickRow) == false) {
                    ballSpeedY *= -1;
                    bothTestsFailed = false;
                }
            }
            
            if(bothTestsFailed) {
                ballSpeedX *= -1;
                ballSpeedY *= -1;
            }
            
        } // end of brick found
    } // end of valid col and row
    if(ballTwoBrickCol >= 0 && ballTwoBrickCol < BRICK_COLS &&
        ballTwoBrickRow >= 0 && ballTwoBrickRow < BRICK_ROWS) {
        
        if(isBrickAtColRow( ballTwoBrickCol,ballTwoBrickRow )) {
            brickGrid[brickIndexUnderBallTwo] = false;
            bricksLeft--;
            
            var prevBallTwoX = ballTwoX - ballTwoSpeedX;
            var prevBallTwoY = ballTwoY - ballTwoSpeedY;
            var prevBrickColTwo = Math.floor(prevBallTwoX / BRICK_W);
            var prevBrickRowTwo = Math.floor(prevBallTwoY / BRICK_H);
            
            var bothTestsFailedTwo = true;
            
            if(prevBrickColTwo != ballTwoBrickCol) {
                if(isBrickAtColRow(prevBrickColTwo, ballTwoBrickRow) == false) {
                    ballTwoSpeedX *= -1;
                    bothTestsFailedTwo = false;
                }
            }
            if(prevBrickRowTwo != ballTwoBrickRow) {
                if(isBrickAtColRow(ballTwoBrickCol, prevBrickRowTwo) == false) {
                    ballTwoSpeedY *= -1;
                    bothTestsFailedTwo = false;
                }
            }
            
            if(bothTestsFailedTwo) {
                ballTwoSpeedX *= -1;
                ballTwoSpeedY *= -1;
            }
            
        } // end of brick found
    } // end of valid col and row
} //end of func