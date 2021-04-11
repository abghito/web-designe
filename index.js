function rolldice() {
  var x = [1 + Math.floor(6*Math.random()) ,  1 + Math.floor(6*Math.random())];
  if (x[0]<x[1]){
    document.getElementById("winner").textContent="Player 2 wins! 🚩";
    var a = "img/dice"+x[0]+".png";
    var b = "img/dice" + x[1]+".png";
    document.getElementById("pl2").setAttribute("src",b);
    document.getElementById("pl1").setAttribute("src",a);
  }
  else if (x[0]>x[1]) {
    document.getElementById("winner").textContent="🚩 Player 1 wins!";
    var a = "img/dice"+x[0]+".png";
    var b = "img/dice" + x[1]+".png";
    document.getElementById("pl2").setAttribute("src",b);
    document.getElementById("pl1").setAttribute("src",a);

  }
  else {
    document.getElementById("winner").textContent="Draw!";
    var a = "img/dice"+x[0]+".png";
    var b = "img/dice" + x[1]+".png";
    document.getElementById("pl2").setAttribute("src",b);
    document.getElementById("pl1").setAttribute("src",a);
  }
}
