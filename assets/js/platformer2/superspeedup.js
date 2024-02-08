/*import Character from './Character.js';
import GameEnv from './GameEnv.js';
import Player from './Player.js';
export class speedup extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, data, xPercentage, minPosition){
        super(canvas, image, data );

        //Initial Position of speedup item
        this.x = xPercentage * GameEnv.innerWidth;

        

    }

    update() {
        super.update();
        // Add any other update logic here
        
    }
    collisionAction() {

        if (this.collisionData.touchPoints.other.id === "player") {
            // Collision: Top of Goomba with Bottom of Player
            if (this.collisionData.touchPoints.other.bottom) {
                this.destroy();
                console.log("working as intended")
            }
            if (this.collisionData.touchPoints.other.id === "player") {
                if (this.collisionData.touchPoints.other.left || this.collisionData.touchPoints.other.right) {
                    this.destroy();
                    console.log("working as intended")            
                }
            }  
        }
    }
   
        

        
} 

export default speedup;*/