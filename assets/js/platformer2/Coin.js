import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Coin extends GameObject {
    constructor(canvas, image) {
        super(canvas, image, 0);
        // Set the initial position and size
        this.size();
    }

    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        // Save the current transformation matrix
        this.ctx.save();

        // Rotate the canvas 90 degrees to the left
        this.ctx.rotate(-Math.PI / 2);

        // Draw the image at the rotated position (swap x and y)
        this.ctx.drawImage(this.image, -this.image.height, 0);

        // Restore the original transformation matrix
        this.ctx.restore();
    }

    // Center and set Coin position with adjustable height and width
    size() {
        // Make the image 10 times smaller
        const scaledWidth = this.image.width * 0.2;
        const scaledHeight = this.image.height * 0.169;

        // Center the object on the screen
        const randomPosition = Math.random() < 0.5; // Randomly choose between two positions

        let coinX, coinY;

        if (randomPosition) {
            coinX = (GameEnv.innerWidth - scaledWidth) / 7;
            coinY = (GameEnv.innerHeight - scaledHeight) / 1.5;
        } else {
            coinX = (GameEnv.innerWidth - scaledWidth) / 7;
            coinY = (GameEnv.innerHeight - scaledHeight) / 1.5;
        }

        // Set variables used in Display and Collision algorithms
        this.bottom = coinY + scaledHeight;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;

        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${coinX}px`;
        this.canvas.style.top = `${coinY}px`;
    }

    // Method to hide the coin
    hide() {
        this.canvas.style.display = 'none';
    }

    // Method to show the coin
    show() {
        this.canvas.style.display = 'block';
    }
}

export default Coin;
