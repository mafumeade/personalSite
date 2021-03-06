var minBytes = 4;
var maxBytes = 16;
var rate = 7;

var container = document.getElementById("rainContainer");

var distNames = ["near", "mid", "far", "veryFar"];

var divs = [];
setInterval(checkOffScreen, 1000);

CreateDiv();
setInterval(CreateDiv, rate * 1000);

function checkOffScreen() {
    for(var i = 0; i < divs.length; i++){
        if(divs[i].offsetTop >= window.outerHeight || divs[i].style.display == "none"){
            container.removeChild(divs[i]);
            divs.splice(i--, 1);
        }
    }
}

function CreateDiv(){
    var div = document.createElement("div");
    container.appendChild(div);

    div.className = "rain " + distNames[Math.floor(Math.random() * distNames.length)];


    divs.push(div);
    setTimeout(function(){
        fillDiv(div);
        div.style.left = Math.random() * window.innerWidth + "px";
        div.className += " active";
    }, 20);
}


function fillDiv(div) {
    var n = Math.floor(Math.random() * (maxBytes - minBytes + 1)) + minBytes;
    for(var i = 0; i < n; i++){
        div.innerHTML += generateByte();
    }
}

function generateByte(s) {
    if(s == undefined) return generateByte("\n");
    if(s.length == 10)return s;
    if(s.length == 5)return generateByte(s + " ");
    return generateByte(s + Math.round(Math.random()));
}

