function ballReset() {
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}
function ballTwoReset() {       //BALL TWO
    ballTwoX = canvas.width/2+20;
    ballTwoY = canvas.height/2+20;
}
    
function ballMove() {
    ballX += ballSpeedX;
	ballY += ballSpeedY;

	if(ballX < 0 && ballSpeedX < 0.0) { //left
		ballSpeedX *= -1;
	}
	if(ballX > canvas.width && ballSpeedX > 0.0) { //right side
		ballSpeedX *= -1;
	}
	if(ballY < 0 && ballSpeedY < 0.0) { //top
		ballSpeedY *= -1;
	}
	if(ballY > canvas.height) { //bottom
        ballReset();
        brickReset();
	}
}
    
function ballTwoMove() {      //BALL TWO
    ballTwoX += ballTwoSpeedX;
	ballTwoY += ballTwoSpeedY;

	if(ballTwoX < 0 && ballTwoSpeedX < 0.0) { //left
		ballTwoSpeedX *= -1;
	}
	if(ballTwoX > canvas.width && ballTwoSpeedX > 0.0) { //right side
		ballTwoSpeedX *= -1;
	}
	if(ballTwoY < 0 && ballTwoSpeedY < 0.0) { //top
		ballTwoSpeedY *= -1;
	}
	if(ballTwoY > canvas.height) { //bottom
        // ballTwoReset();
	}
}