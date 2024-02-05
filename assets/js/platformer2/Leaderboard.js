import LocalStorage from "./LocalStorage.js";
import GameEnv from "./GameEnv.js";
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
        var t = document.createElement("table");
        t.className = "table scores";
        //create table header
        var header = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.innerText = "Name";
        header.append(th1);
        var th2 = document.createElement("th");
        th2.innerText = "Score";
        header.append(th2);
        t.append(header);

        // Fetch time scores from local storage
        const timeScores = JSON.parse(localStorage.getItem('timeScores')) || [];

        // Populate the table with time scores
        timeScores.forEach(score => {
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = score.userID;
            row.append(td1);
            var td2 = document.createElement("td");
            td2.innerText = score.time;
            row.append(td2);
            t.append(row);
        });

        return t;
    }

    static leaderboardDropDown() {
        var newLeaderboard = new Leaderboard();
        newLeaderboard.initialize();

        var score = newLeaderboard.leaderboardTable;
        document.getElementById("leaderboardDropDown").append(score);

        var IsOpen = false; // default sidebar is closed
        var SubmenuHeight = 0; // calculated height of submenu
        function leaderboardPanel() {
            // toggle isOpen
            IsOpen = !IsOpen;
            // open and close properties for sidebar based on isOpen
            var leaderboard = document.querySelector('.leaderboardDropDown');
            leaderboard.style.width = IsOpen?"200px":"0px";
            leaderboard.style.paddingLeft = IsOpen?"10px":"0px";
            leaderboard.style.paddingRight = IsOpen?"10px":"0px";
            leaderboard.style.top = `calc(${SubmenuHeight}px + ${GameEnv.top}px)`;
        }
        // settings-button and event listener opens sidebar
        document.getElementById("leaderboard-button").addEventListener("click",leaderboardPanel);
        // sidebar-header and event listener closes sidebar
        document.getElementById("leaderboard-header").addEventListener("click",leaderboardPanel);

        window.addEventListener('load', function() {
            var Submenu = document.querySelector('.submenu');
            SubmenuHeight = Submenu.offsetHeight;
        });
    }

}
    
export default Leaderboard;