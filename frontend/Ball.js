
var Ball = function(config){
    this.style = config.style || 'blue';
    this.radius = config.radius;

    this.damping = config.damping || 0.99;

    this.x = config.x;
    this.y = config.y;
    
    this.velx = 0;
    this.vely = 0;

    this.maxX = config.maxX;
    this.maxY = config.maxY;

}

function genVel() {
    if (Math.floor(Math.random() * 2) === 0) {
        return 3;
    }
    else {
        return -3;
    }
    alert("did not genVel");
    return 0;
}



Ball.prototype.newBall = function(timeDiff) {
    this.x = this.maxX/2;
    this.y = this.maxY/2;
    this.velx = 0;
    this.vely = 0;
    var self = this;
    window.setTimeout(function() {
        self.velx = genVel();
        self.vely = genVel();
    }, 1000);
};

Ball.prototype.update = function(timeDiff){
    this.x += this.velx*timeDiff/20;
    this.y += this.vely*timeDiff/20;

    if (this.x - this.radius < 0){
        this.newBall();
    }
    else if(this.x + this.radius > this.maxX){
        this.newBall();
    }
    if (this.y - this.radius < 0){
        this.y = this.radius;
        this.vely = -this.vely/this.damping;
    }
    else if (this.y + this.radius > this.maxY){
        this.y = this.maxY - this.radius;
        this.vely = -this.vely/this.damping;
    }
}

Ball.prototype.draw = function(scaledPage){
    scaledPage.fillCircle(this.x, this.y, this.radius, this.style);
}

