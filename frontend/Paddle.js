var Paddle = function(config){
    this.style = config.style || 'blue';
    this.radius = config.radius;

    this.x = config.x || 120;
    this.y = config.y || 40;
    
    this.velx = 0;
    this.vely = 0;

    this.maxX = config.maxX;
    this.maxY = config.maxY;

}

Paddle.prototype.update = function(timeDiff){
    this.x += this.velx*timeDiff/20;
    this.y += this.vely*timeDiff/20;

    if (this.x - this.radius < 0){
        this.x = this.radius;
        this.velx = -this.velx/this.damping;
    }
    else if(this.x + this.radius > this.maxX){
        this.x = this.maxX - this.radius;
        this.velx = -this.velx/this.damping;
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

Paddle.prototype.draw = function(scaledPage){
    scaledPage.fillCircle(this.x, this.y, this.radius, this.style);
}

