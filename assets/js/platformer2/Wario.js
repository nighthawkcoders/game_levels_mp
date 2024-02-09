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
                let cutStory = document.getElementById('cut-story');
                let messages = ["Hi! My name is Mario, and I wish...", 
                "I wish I could be just as cool as this guy, Mr. Lopez.", "Help me get to the next level to become him!", "Goomba: >:(, we hate you and want to kill you! ARRRR"];
                console.log("Message length: " + messages.length);
    
                function showMessage(){
                    var x = cutStory;
                    x.className = 'show'; // change class name to show
                    console.log("class name before: "+x.className);
                    console.log("inner HTML: "+x.innerText);
                    //only want to last 3 secs
                    setTimeout(function(){x.className = x.className.replace('show',' ');}, 2000); //replace show with an empty string
                    setTimeout(function(){x.className = x.className.replace(' ','hide');}, 2000);
                    console.log("class name after: "+x.className);
                }
        
                let i = 0;
                let interval = setInterval(() => 
                {
                cutStory.innerText = messages[i]; 
                showMessage();
                i++;
                if(i == messages.length)
                {
                clearInterval(interval);
                }
                }, 3000);
                       
                }  
        }
    }
}

export default Wario;
