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

    get leaderboardTable(){
        // create table element
        var t = document.createElement("leaderboardTable");
        t.className = "leaderboard levels";
        //create table header
        var header = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.innerText = "#";
        header.append(th1);
        var th2 = document.createElement("th");
        th2.innerText = "Leaderboard Tag";
        header.append(th2);
        t.append(header);

        // Create table rows/data
        for(let i = 0, count = 1; i < GameEnv.levels.length; i++){
            if (GameEnv.levels[i].passive) //skip passive levels
                continue; 
            // add level to table
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = String(count++); //human counter
            row.append(td1);
            // place level name in button   
            var td2 = document.createElement("td");
            td2.innerText = GameEnv.levels[i].tag;
            row.append(td2);
            // listen for row click
            row.addEventListener("click",()=>{ // when player clicks on the row
                //transition to selected level
                GameControl.transitionToLevel(GameEnv.levels[i]); // resize event is triggered in transitionToLevel
            })
            // add level row to table
            t.append(row);
        }

        return t; //returns <table> element
    }

    static leaderboard(){

        console.log("function runs");

        var scores = Leaderboard.leaderboardTable;
        document.getElementById("leaderboard").append(scores);

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