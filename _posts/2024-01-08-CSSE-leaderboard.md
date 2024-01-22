---
layout: base
title: Leaderboard
description: leaderboard for multiplayer game
type: devops
courses: { csse: {week: 18} }
image: /images/platformer/backgrounds/hills.png
---

<style>
    #addRow, #backToGame {
        position: relative;
        z-index: 2; /*Ensure the controls are on top*/
    }
</style>

<div>
    <div id="addRow">
        <button onclick="addRow()" id="addRow">Add Row</button>
    </div>
    <div id="backToGame">
        <button>Back To Game</button>
    </div>
</div>
<div>
    <table id="leaderboard">
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
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