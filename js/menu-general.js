function menuOpen() {
    document.getElementById('open-menu').style.top = "0.0";
    document.getElementById('div-menu').style.display = "inline-block";
    document.getElementById('div-menu').style.opacity = "1.0";
    document.getElementById('open-menu').style.display = "none";
}

function menuClose() {
    document.getElementById('open-menu').style.top = "-100";
    document.getElementById('div-menu').style.display = "none";
    document.getElementById('div-menu').style.opacity = "0.0";
    document.getElementById('open-menu').style.display = "block";
}