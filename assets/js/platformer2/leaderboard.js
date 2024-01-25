
    function addRow() {
    var table = document.getElementById("leaderboard").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New name";
    cell2.innerHTML = "New score";
}