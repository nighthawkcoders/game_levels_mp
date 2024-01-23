import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class WallObsticle extends GameObject {
    constructor(canvas, image, data, xPercentage) {
        super(canvas, image, data);
        this.platformX = xPercentage * GameEnv.innerWidth;
    }

    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        this.ctx.drawImage(this.image, 0, 0);
    }

    // Set platform position
    size() {
        // Formula for Width and Height should be on constant ratio, using a proportion of 832
        const scaledWidth = GameEnv.innerHeight * (30 / 832);
        const scaledHeight = GameEnv.innerHeight * 0.1;  // height of the jump platform is 1/10 of the width
        const platformX = this.platformX;
        const platformY = GameEnv.bottom - scaledHeight; // Set to the bottom of the screen


        // set variables used in Display and Collision algorithms
        this.bottom = platformY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
    
        //this.canvas.width = this.width; 
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${platformX}px`;
        this.canvas.style.top = `${platformY}px`; 

    }
}

export default WallObsticle;
