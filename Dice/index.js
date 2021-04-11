window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        var x = [1 + Math.floor(6*Math.random()) ,  1 + Math.floor(6*Math.random())];
        if (x[0]<x[1]){
          document.getElementById("winner").textContent="Player 2 wins! 🚩";
          var a = "img/dice"+x[0]+".png";
          var b = "img/dice" + x[1]+".png";
          document.querySelectorAll("img")[1].setAttribute("src",b);
          document.querySelectorAll("img")[0].setAttribute("src",a);
        }
        else if (x[0]>x[1]) {
          document.getElementById("winner").textContent="🚩 Player 1 wins!";
          var a = "img/dice"+x[0]+".png";
          var b = "img/dice" + x[1]+".png";
          document.querySelectorAll("img")[1].setAttribute("src",b);
          document.querySelectorAll("img")[0].setAttribute("src",a);

        }
        else {
          document.getElementById("winner").textContent="Draw!";
          var a = "img/dice"+x[0]+".png";
          var b = "img/dice" + x[1]+".png";
          document.querySelectorAll("img")[1].setAttribute("src",b);
          document.querySelectorAll("img")[0].setAttribute("src",a);
        }
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
