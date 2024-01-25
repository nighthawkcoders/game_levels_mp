---
layout: base
title: Leaderboard
description: leaderboard for multiplayer game
type: devops
courses: { csse: {week: 18} }
image: /images/platformer/backgrounds/hills.png
---
    
<div>
    <div id="addRow">
        <button onclick="addRow()" id="addRow">Add Row</button>
    </div>
    <div id="backToGame">
        <a href="http://127.0.0.1:4100/game_levels_mp/2024/01/08/CSSE-oop-game-levels2.html">
            <button>Back To Game</button>
        </a>
    </div>
</div>
<div>
    <table id = leaderboard>
        <thead id="leaderboardHead">
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            </tr>
        </tbody>
    </table>
</div>