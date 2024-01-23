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
    <table id="leaderboardTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

<script>
    function addRow() {
    var table = document.getElementById("leaderboard").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New name";
    cell2.innerHTML = "New score";
}
</script>