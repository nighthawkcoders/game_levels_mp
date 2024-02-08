import Character from './Character.js';
import GameEnv from './GameEnv.js';

class UFO extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, data){
        super(canvas, image, data);

        //Position of the UFO
        this.y = 0.8 * GameEnv.innerHeight;
        this.x = 0.8 * GameEnv.innerWidth;
    }

    update() {
        super.update();
        console.log("loaded in!")
    }

    collisionAction() {
        if (this.collisionData.touchPoints.other.id === "player") {
            console.log("player_abudcted");
        }
    }
}

export default UFO;