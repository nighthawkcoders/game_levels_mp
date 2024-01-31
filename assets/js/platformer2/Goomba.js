import Character from './Character.js';
import GameEnv from './GameEnv.js';
import playGoombaDeath from './Audio.js';

export class Goomba extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, data, xPercentage, yPercentage, name, minPosition){
        super(canvas, image, data );
        this.name = name;

        //Initial Position of Goomba
        this.x = xPercentage * GameEnv.innerWidth;
        this.y = yPercentage

        //Access in which a Goomba can travel    
        this.minPosition = minPosition * GameEnv.innerWidth;
        this.maxPosition = this.x + xPercentage * GameEnv.innerWidth;

        this.immune = 0;

        //Define Speed of Enemy
        if (GameEnv.difficulty === "normal" || GameEnv.difficulty === "easy") {
            this.speed = this.speed;
        } else {
            this.speed = this.speed * 3;
        }
    }

    update() {
        super.update();
        
        // Check for boundaries
        if (this.x <= this.minPosition || (this.x + this.canvasWidth >= this.maxPosition)) {
            this.speed = -this.speed;
        }

        // Every so often change direction
        if (GameEnv.difficulty === "normal") {
            if (Math.random() < 0.005) {
                this.speed = -this.speed
            }
        } else if (GameEnv.difficulty === "hard") {
            if (Math.random() < 0.01) {
                this.speed = -this.speed
            }
        }

        //Chance To Become Immune to Player
        if (GameEnv.difficulty === "normal") {
            if (Math.random() < 0.00001) {
                this.canvas.style.filter = 'brightness(1000%)';
                this.immune = 1;
            }
        } else if (GameEnv.difficulty === "hard") {
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
                this.destroy();
                playGoombaDeath();
            }
        }
        if (this.collisionData.touchPoints.other.id === "goomba") {
            if (this.collisionData.touchPoints.other.left || this.collisionData.touchPoints.other.right) {
                this.speed = -this.speed;            
            }
        }    
    }

}

export default Goomba;