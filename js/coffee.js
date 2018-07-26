window.onload = function init() {
  setTimeout(getTimeAndChangeSignal(), 1000);
}
// Função
function getTimeAndChangeSignal(){
  var h = new Date(), i = Math.floor((Math.random() * 4) + 1);
  document.getElementById("hour").innerHTML = addZero(h.getHours())+":"+addZero(h.getMinutes());
  document.getElementById("signal").style.backgroundImage = "url('img/Signal"+i+".png')";

}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(function(){getTimeAndChangeSignal()}, 3000);
