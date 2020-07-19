window.addEventListener('load', changeRange);

function changeRange() {

    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);

    var color = "#" + hex(r) + hex(g) + hex(b);

    var hlabel = document.getElementById("hex-label");
    hlabel.style.backgroundColor = color;
    document.getElementById("r-label").value = r;
    document.getElementById("g-label").value = g;
    document.getElementById("b-label").value = b;

}

function hex(v) {
    var hex = v.toString(16);
    if (v < 16) {
        hex = "0" + hex;
    }
    return hex;
}