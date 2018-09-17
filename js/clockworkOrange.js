window.onload = function init() {
  setTimeout(getTime(), 1000);
}
function getTime(){
  var h = new Date(), i = Math.floor((Math.random() * 4) + 1);
  document.getElementById("clock").innerHTML = addZero(h.getHours())+":"+addZero(h.getMinutes())+":"+addZero(h.getSeconds());
  document.getElementById("date").innerHTML = weekDayTranslation(h.getDay())+", "+h.getDate()+" de "+monthTranslation(h.getMonth())+" de "+ h.getFullYear();
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function  beep(){
  var snd = new Audio("./snd/alarm1.wav");
  snd.play();
}
function alarmDefinition(){
  document.getElementById("hour", "date").style.display = "none";
  document.getElementById("backBtn").style.display = "inline";
}
function AlarmRedefinition(){
  document.getElementById("hour", "date").style.display = "block";
  document.getElementById("backBtn").style.display = "none";
}
function btnOrganization(i){
  if (i == 0){
    document.getElementById("img0").src = "img/alarmClockBlack.png";
    document.getElementById("img1").src = "img/timerWhite.png";
    document.getElementById("img2").src = "img/stopwatchWhite.png";
    document.getElementById("btn0").className = "button active";
    document.getElementById("btn1").className = "button";
    document.getElementById("btn2").className = "button";
  }
  else if (i == 1){
    document.getElementById("img0").src = "img/alarmClockWhite.png";
    document.getElementById("img1").src = "img/timerBlack.png";
    document.getElementById("img2").src = "img/stopwatchWhite.png";
    document.getElementById("btn0").className = "button";
    document.getElementById("btn1").className = "button active";
    document.getElementById("btn2").className = "button";
  }
  else if (i == 2){
    document.getElementById("img0").src = "img/alarmClockWhite.png";
    document.getElementById("img1").src = "img/timerWhite.png";
    document.getElementById("img2").src = "img/stopwatchBlack.png";
    document.getElementById("btn0").className = "button";
    document.getElementById("btn1").className = "button";
    document.getElementById("btn2").className = "button active";
  }
}

function weekDayTranslation(i){
  if (i == 0) {
    i = "Domingo";
  }
  else if (i == 1) {
    i = "Segunda";
  }
  else if (i == 2){
    i = "Terça";
  }
  else if (i == 3) {
    i = "Quarta";
  }
  else if (i == 4) {
    i = "Quinta";
  }
  else if (i == 5) {
    i = "Sexta";
  }
  else {
    i = "Sábado";
  }
  return i;
}
function monthTranslation(i){
  if (i == 0) {
    i = "janeiro";
  }
  else if (i == 1) {
    i = "fevereiro";
  }
  else if (i == 2){
    i = "março";
  }
  else if (i == 3) {
    i = "abril";
  }
  else if (i == 4) {
    i = "maio";
  }
  else if (i == 5) {
    i = "junho";
  }
  else if (i == 6){
    i = "julho";
  }
  else if (i == 7) {
    i = "agosto";
  }
  else if (i == 8){
    i = "setembro";
  }
  else if (i == 9) {
    i = "outubro";
  }
  else if (i == 10) {
    i = "novembro";
  }
  else {
    i = "dezembro";
  }
  return i;
}
setInterval(function(){getTime()}, 1000);
