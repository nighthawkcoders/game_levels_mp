import Character from './Character.js';
import GameEnv from './GameEnv.js';
export class Wario extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, data, xPercentage, yPercentage){
        super(canvas, image, data );

        //Initial Position of Wario
        this.x = xPercentage * GameEnv.innerWidth;
        this.yPercentage = yPercentage;
        
        // Event listener for key press
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    update() {
        this.y = this.yPercentage * GameEnv.innerHeight
        this.canvas.style.scale = "2.0"

        console.log (this.y)
        console.log (GameEnv.innerHeight)
        super.update();
        // Add any other update logic here
    }

    collisionAction() {
        if (this.collisionData.touchPoints.other.id === "player") {
            if (this.collisionData.touchPoints.other.left || this.collisionData.touchPoints.other.right) {
                this.speed = -this.speed; 
                       
            }  
        }
    }
}

export default Wario;
