function ballPaddleHandling(){
    var paddleTopEdgeY = canvas.height-PADDLE_DIST_FROM_EDGE;
    var paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS;
    var paddleLeftEdgeX = paddleX;
    var paddleRightEdgeX = paddleX + PADDLE_WIDTH;
    if( ballY > paddleTopEdgeY && //below top of paddle
       ballY < paddleBottomEdgeY && //above bottom of paddle
       ballX > paddleLeftEdgeX && //to the right of the left edge
       ballX < paddleRightEdgeX) { 
        
        ballSpeedY *= -1;
        
        var centerOfPaddleX = paddleX + PADDLE_WIDTH/2;
        var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
        ballSpeedX = ballDistFromPaddleCenterX * 0.15;
        
        if(bricksLeft == 0){
            brickReset();
        } //out of bricks
    } //ball center inside paddle
    if( ballTwoY > paddleTopEdgeY && //below top of paddle
       ballTwoY < paddleBottomEdgeY && //above bottom of paddle
       ballTwoX > paddleLeftEdgeX && //to the right of the left edge
       ballTwoX < paddleRightEdgeX) { 
        
        ballTwoSpeedY *= -1;
        
        var centerOfPaddleX = paddleX + PADDLE_WIDTH/2;
        var ballDistFromPaddleCenterX = ballTwoX - centerOfPaddleX;
        ballTwoSpeedX = ballDistFromPaddleCenterX * 0.15;
        
        if(bricksLeft == 0){
            brickReset();
        } //out of bricks
    }
} // end of ball paddle handling