var Paddle = function(config){
    this.style = config.style || 'blue';

    this.height = config.height || 120;
    this.width = config.width || 20;

    this.x = config.x;
    this.y = config.y || 120; //Start in the middle of the screen.
    
    this.velx = 0;
    this.vely = 0;

    this.maxX = config.maxX;
    this.maxY = config.maxY;

    this.damping = config.damping || 1.5;
}

Paddle.prototype.update = function(timeDiff){
    //We only update Y axis, as they are paddles and need to stay at the edge.
    this.y += this.vely*timeDiff/20; 

    if (this.x < 0){
        this.x = 0;
        this.velx = -this.velx/this.damping;
    }
    else if(this.x + this.height > this.maxX){
        this.x = this.maxX - this.height;
        this.velx = -this.velx/this.damping;
    }
}

Paddle.prototype.draw = function(scaledPage){
    scaledPage.fillRect(this.x, this.y, this.width, this.height, this.style);
}

