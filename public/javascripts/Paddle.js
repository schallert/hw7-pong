var Paddle = function(config){
    
    this.style = config.style || 'blue';

    this.height = config.height || 80;
    this.width = config.width || 15;

    this.x = config.x;
    this.y = config.y || 120; //Start in the middle of the screen.
    
    this.velx = 0;
    this.vely = 0;

    this.maxX = config.maxX;
    this.maxY = config.maxY || 320;

    this.damping = config.damping || 1.5;
}

Paddle.prototype.update = function(timeDiff){
    //We only update Y axis, as they are paddles and need to stay at the edge.
    this.y += this.vely*timeDiff/20; 

    if (this.y < 0){
        this.y = 0;
        this.vely = -this.vely/this.damping;
    }
    else if(this.y + this.height > this.maxY){
        this.y = this.maxY - this.height;
        this.vely = -this.vely/this.damping;
    }
}

Paddle.prototype.draw = function(scaledPage){
    scaledPage.fillRect(this.x, this.y, this.width, this.height, this.style);
}

