import LocalStorage from "./LocalStorage.js";
export class Leaderboard extends LocalStorage {
    constructor(){ //default keys for localStorage
        var keys = {
            userID:"userID",
        }; 
        super(keys); //creates this.keys
    }
    
}

export default Leaderboard;