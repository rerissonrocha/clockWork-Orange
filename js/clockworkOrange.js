window.onload = function init() {
  setTimeout(getTime(), 1000);
}
function getTime(){
  var h = new Date(), i = Math.floor((Math.random() * 4) + 1);
  document.getElementById("hour").innerHTML = addZero(h.getHours())+":"+addZero(h.getMinutes())+":"+addZero(h.getSeconds());
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(function(){getTime()}, 1000);
