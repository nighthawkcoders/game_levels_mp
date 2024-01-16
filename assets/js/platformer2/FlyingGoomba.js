import Character from './Character.js';
import GameEnv from './GameEnv.js';

export class FlyingGoomba extends Character {
  
    // constructors sets up Character object 
    constructor(canvas, image, data, xPercentage, minPosition){
        super(canvas, image, data);

        //Initial Position of Goomba
        this.x = xPercentage * GameEnv.innerWidth;
        this.y = 0.4 * GameEnv.innerHeight;
        
        //Access in which a Goomba can travel
        this.minPosition = minPosition * GameEnv.innerWidth;
        this.maxPosition = this.x + xPercentage * GameEnv.innerWidth;

        this.immune = 0;
    }

    dropGoomba() {
      let playerX = GameEnv.PlayerPosition.playerX;
      let playerY = GameEnv.PlayerPosition.playerY;

      // Drop the Goomba on the Player when relatively close
      if (Math.abs(this.x - playerX) < 150 && this.y !== playerY) {
        //Move Goomba towards Player
        this.y = lerp(this.y, playerY, 0.03);
      } else {
        //Move Goomba towards Sky
        this.y = lerp(this.y, 0.4 * GameEnv.innerHeight, 0.02);
      }
    }

    update() {
        super.update();

        if (this.x <= this.minPosition || (this.x + this.canvasWidth >= this.maxPosition) || this.x > (GameEnv.innerWidth - 100) ) {
            this.speed = -this.speed;
        }

        this.dropGoomba();

        // Every so often change direction
        if (Math.random() < 0.005) {
            this.speed = Math.random() < 0.5 ? -this.speed : this.speed;
        }

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

/* Linear interpolation function
  min: start value
  max: end value
  t: normalization factor (0 - 1)
*/
function lerp(min, max, t) {
  return (max - min) * t + min;
}

export default FlyingGoomba;