var Pong = function(){
    this.setup();
    window.util.deltaTimeRequestAnimationFrame(this.draw.bind(this));
}

//==============================================
//SETUP
//==============================================

Pong.prototype.setup = function(){
    window.util.patchRequestAnimationFrame();
    window.util.patchFnBind();
    this.initCanvas();
    TouchHandler.init(this);
    this.initLeftPaddle();
    this.initRightPaddle();
    this.initBall();
    this.initAccelerometer();
}

Pong.prototype.initCanvas = function(){
    this.body = $(document.body);
    this.body.width(document.body.offsetWidth);
    this.body.height(window.innerHeight - 20);
    this.width = 480;
    this.height = 320;
    this.canvas = window.util.makeAspectRatioCanvas(this.body, this.width/this.height);
    this.page = new ScaledPage(this.canvas, this.width);
};

Pong.prototype.initBall = function(){
    this.ball = new Ball({'x': this.width/2, 'y': this.height/2,
                            'radius': 7,
                            'maxX': this.width, 'maxY': this.height});
    this.ball.velx = 3;
    this.ball.vely = 3;
}

Pong.prototype.initLeftPaddle = function(){
    this.leftPaddle = new Paddle({
        "x" : 10,
    });
}

Pong.prototype.initRightPaddle = function(){
    this.rightPaddle = new Paddle({
        "x" : 450,
    });
}

Pong.prototype.initAccelerometer = function(){
    this.accelerometer = new Accelerometer();
    this.accelerometer.startListening();
}

//==============================================
//DRAWING
//==============================================

Pong.prototype.draw = function(timeDiff){
    this.clearPage();
    this.drawBall(timeDiff);
    this.drawLeftPaddle(timeDiff);
    this.drawRightPaddle(timeDiff);
    //TouchHandler.drawBalls(timeDiff);
    this.updateBall();
    this.updateGame();
}

Pong.prototype.clearPage = function(){
    this.page.fillRect(0, 0, this.width, this.height, '#eee');
}

Pong.prototype.drawBall = function(timeDiff){
    this.ball.update(timeDiff);
    this.ball.draw(this.page);
}

Pong.prototype.updateBall = function(){
    var lastAcceleration = this.accelerometer.getLast();
    this.ball.velx += lastAcceleration.x/8;
    this.ball.vely += lastAcceleration.y/8;

}

Pong.prototype.drawLeftPaddle = function(timeDiff) {
    this.leftPaddle.update(timeDiff);
    this.leftPaddle.draw(this.page);
};

Pong.prototype.drawRightPaddle = function(timeDiff) {
    this.rightPaddle.update(timeDiff);
    this.rightPaddle.draw(this.page);
};

Pong.prototype.updateLeftPaddle = function() {
};
Pong.prototype.updateRightPaddle = function() {
};

Pong.prototype.updateGame = function(){
    var buffer = 4;
    //If behind the left paddle
    var left = this.leftPaddle.x + this.leftPaddle.width - (this.ball.x - this.ball.radius)
    var right = this.ball.x + this.ball.radius - (this.rightPaddle.x)

    if ((left >= 0 && left <= buffer) 
        && (this.ball.y >= this.leftPaddle.y && this.ball.y <= this.leftPaddle.y + this.leftPaddle.height))
        this.ball.velx *= -1

    if((right >= 0 && right <= buffer)
        && (this.ball.y >= this.rightPaddle.y && this.ball.y <= this.leftPaddle.y + this.leftPaddle.height))
        this.ball.velx *= -1

}