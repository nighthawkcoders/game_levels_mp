import LocalStorage from "./LocalStorage.js";
export class Leaderboard extends LocalStorage {
    constructor(){ //default keys for localStorage
        var keys = {
        }; 
        super(keys); //creates this.keys
    }

    initialize(){ 
        // Load all keys from local storage
        this.loadAll();
    }

    static leaderboard(){

        console.log("function runs");

        // Initiliaze Game settings controller 
        var settingsControl = new Leaderboard();
        settingsControl.initialize();


        var isOpen = false; // default sidebar is closed
        var leaderboardHeight = 0; // calculated height of submenu
        function leaderboardPanel(){
            // toggle isOpen
            isOpen = !isOpen;
            // open and close properties for leaderboard based on isOpen
            var leaderboard = document.querySelector('.leaderboard');
            leaderboard.style.width = isOpen?"200px":"0px";
            leaderboard.style.paddingLeft = isOpen?"10px":"0px";
            leaderboard.style.paddingRight = isOpen?"10px":"0px";
            leaderboard.style.top = `calc(${leaderboardHeight}px + ${GameEnv.top}px)`;
        }

        document.getElementById("leaderboard-button").addEventListener("click",leaderboardPanel);

        document.getElementById("leaderboard-header").addEventListener("click",leaderboardPanel);

        window.addEventListener('load', function() {
            var leaderboard = document.querySelector('.leaderboard');
            leaderboardHeight = leaderboard.offsetHeight;
        });
    }
}

export default Leaderboard;