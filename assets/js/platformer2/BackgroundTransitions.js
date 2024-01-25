import GameEnv from './GameEnv.js';
import Background from './Background.js';

export class BackgroundTransitions extends Background {
    constructor(canvas, image, data) {
        super(canvas, image, data);
    }

    // speed is used to background parallax behavior
    update() {
        this.speed = GameEnv.backgroundMountainsSpeed;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.update();
        if (GameEnv.transitionHide === true) {
            //this.ctx.globalAlpha = 0;
            this.destroy();
        }
    }
}

export default BackgroundTransitions;