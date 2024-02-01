import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Wall extends GameObject {
    constructor(canvas, image, xPercentage) {
        super(canvas, image);
        this.platformX = xPercentage * GameEnv.innerWidth;
    }

    // Required, but no update action
    update() {
        // Add any update logic if needed in the future
    }

    // Draw the wall at its specified position
    draw(x, y) {
        this.ctx.drawImage(this.image, x, y);
    }

    // Set wall position and size
    setSizeAndPosition() {
        const scaledHeight = GameEnv.innerHeight * (30 / 832);
        const scaledWidth = GameEnv.innerHeight * 0.1;
        const platformX = this.platformX;
        const platformY = (GameEnv.bottom - scaledHeight) * 0.8;

        this.bottom = platformY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;

        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${platformX}px`;
        this.canvas.style.top = `${platformY}px`;
    }
}

export default Wall;
