$.getJSON("data.json",
function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].number + "</td>");
		tr.append("<td>" + data[i].from + "</td>");
        tr.append("<td>" + data[i].to + "</td>");
        tr.append("<td>" + data[i].time + "</td>");
		tr.append("<td>" + data[i].avia + "</td>");
		tr.append("<td>" + data[i].status + "</td>");
        $('table').append(tr);
    }
});

function clickButton() {

}

function getCellContent(id, num) {
    var x = document.getElementById(id).rows[0].cells;
    document.getElementById("demo").innerHTML = x[0].innerHTML;
}