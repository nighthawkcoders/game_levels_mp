import GameEnv from './GameEnv.js';
import Background from './Background.js';

export class BackgroundHeck extends Background {
    constructor(canvas, image, data) {
        super(canvas, image, data);
    }

    // speed is used to background parallax behavior
    update() {
        this.speed = GameEnv.backgroundHeckSpeed;
        super.update();
    }

    //Cause of limited bg cutout, keeping just incase it causes issues later
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.draw();
    }

}

export default BackgroundHeck;