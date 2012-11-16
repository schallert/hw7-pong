var BouncyBallApp = function(){
    this.setup();
    window.util.deltaTimeRequestAnimationFrame(this.draw.bind(this));
}

//==============================================
//SETUP
//==============================================

BouncyBallApp.prototype.setup = function(){
    window.util.patchRequestAnimationFrame();
    window.util.patchFnBind();
    this.initCanvas();
    TouchHandler.init(this);
    this.initBall();
    this.initAccelerometer();
}

BouncyBallApp.prototype.initCanvas = function(){
    this.body = $(document.body);
    this.body.width(document.body.offsetWidth);
    this.body.height(window.innerHeight - 20);
    this.width = 320;
    this.height = 480;
    this.canvas = window.util.makeAspectRatioCanvas(this.body, this.width/this.height);
    this.page = new ScaledPage(this.canvas, this.width);
};

BouncyBallApp.prototype.initBall = function(){
    this.ball = new Ball({'x': this.width/2, 'y': this.height/2,
                            'radius': 20,
                            'maxX': this.width, 'maxY': this.height});
    this.ball.velx = 5;
    this.ball.vely = 5;
}

BouncyBallApp.prototype.initAccelerometer = function(){
    this.accelerometer = new Accelerometer();
    this.accelerometer.startListening();
}

//==============================================
//DRAWING
//==============================================

BouncyBallApp.prototype.draw = function(timeDiff){
    this.clearPage();
    this.drawBall(timeDiff);
    TouchHandler.drawBalls(timeDiff);
    this.updateBall();
}

BouncyBallApp.prototype.clearPage = function(){
    this.page.fillRect(0, 0, this.width, this.height, '#eee');
}

BouncyBallApp.prototype.drawBall = function(timeDiff){
    this.ball.update(timeDiff);
    this.ball.draw(this.page);
}

BouncyBallApp.prototype.updateBall = function(){
    var lastAcceleration = this.accelerometer.getLast();
    this.ball.velx += lastAcceleration.x/8;
    this.ball.vely += lastAcceleration.y/8;

}
