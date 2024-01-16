import Character from './Character.js';
import GameEnv from './GameEnv.js';

export class Goomba extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, data, xPercentage, minPosition){
        super(canvas, image, data );

        //Initial Position of Goomba
        this.x = xPercentage * GameEnv.innerWidth;

        //Access in which a Goomba can travel
        this.minPosition = minPosition * GameEnv.innerWidth;
        this.maxPosition = this.x + xPercentage * GameEnv.innerWidth;

        this.immune = 0;
    }

    update() {
        super.update();
        
        // Check for boundaries
        if (this.x <= this.minPosition || (this.x + this.canvasWidth >= this.maxPosition)) {
            this.speed = -this.speed;
        }

        // Every so often change direction
        if (Math.random() < 0.005) {
            this.speed = Math.random() < 0.5 ? -this.speed : this.speed;
        }

        // 1 / 100,000 Chance To Become Immune to Player
        if (Math.random() < 0.00001) {
            this.canvas.style.filter = 'brightness(1000%)';
            this.immune = 1;
        }

        // Move the enemy
        this.x -= this.speed;
    }

    // Player action on collisions
    collisionAction() {
        if (this.collisionData.touchPoints.other.id === "tube") {
            if (this.collisionData.touchPoints.other.left || this.collisionData.touchPoints.other.right) {
                this.speed = -this.speed;            
            }
        }
        if (this.collisionData.touchPoints.other.id === "player") {
            // Collision: Top of Goomba with Bottom of Player
            if (this.collisionData.touchPoints.other.bottom && this.immune === 0) {
                // console.log("Bye Bye Goomba");
                this.x = GameEnv.innerWidth + 1;
                this.destroy();
            }
        }    
    }

}

export default Goomba;