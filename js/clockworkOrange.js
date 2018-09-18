window.onload = function init() {
  setTimeout(getTime(), 1000);
}
var start = document.getElementById('startBtn'),
    stop = document.getElementById('pauseBtn'),
    clear = document.getElementById('restartBtn'),
    milisec = 0, seconds = 0, minutes = 0, hours = 0,
    increment, active = true;

function getTime(){
  var h = new Date();
  document.getElementById("clock").innerHTML = addZero(h.getHours())+":"+addZero(h.getMinutes())+":"+addZero(h.getSeconds());
  document.getElementById("date").innerHTML = weekDayTranslation(h.getDay())+", "+h.getDate()+" de "+monthTranslation(h.getMonth())+" de "+ h.getFullYear();
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function stopwatchStart(){
  if(active){
    stopwatchStartInc()
    document.getElementById("startBtn").innerHTML = "Ativo";
    document.getElementById("startBtn").style.backgroundColor = "#009933";
  }
  active = false;
}
function stopWatchPause(){
  if(!active){
    document.getElementById("startBtn").innerHTML = "Continuar";
    document.getElementById("startBtn").style.backgroundColor = "#00ff55";
  }
  clearTimeout(increment);
  active = true;
}
function stopWatchReset(){
  document.getElementById("startBtn").innerHTML = "Começar";
  if(!active){
    document.getElementById("startBtn").style.backgroundColor = "#00ff55";
  }
  document.getElementById("timer").innerHTML = "00:00:00.00";
  milisec = 0; seconds = 0; minutes = 0; hours = 0;
  active = true; clearTimeout(increment);
}
function stopwatchStartInc(){
  milisec++;
  if (milisec>=100) {
    milisec=0; seconds++;
    if(seconds >=60){
      seconds = 0; minutes++;
      if (minutes>=60) {
        minutes = 0; hours++;
      }
    }
  }
  document.getElementById("timer").innerHTML = addZero(hours)+":"+addZero(minutes)+":"+addZero(seconds)+"."+addZero(milisec);
  stopWatchIncrement();
}
function  stopWatchIncrement(){
  increment = setTimeout(stopwatchStartInc, 10);
}
function btnOrganization(i){
  if (i==0){
    document.getElementById("img0").src = "img/alarmClockBlack.png";
    document.getElementById("img2").src = "img/stopwatchWhite.png";
    document.getElementById("btn0").className = "button active";
    document.getElementById("btn2").className = "button";
    document.getElementById("hour").style.display = "block";
    document.getElementById("timerFrame").style.display = "none";
  }
  else{
    document.getElementById("img0").src = "img/alarmClockWhite.png";
    document.getElementById("img2").src = "img/stopwatchBlack.png";
    document.getElementById("btn0").className = "button";
    document.getElementById("btn2").className = "button active";
    document.getElementById("hour").style.display = "none";
    document.getElementById("timerFrame").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("description").style.display = "block";
  }
}
function weekDayTranslation(x){
  var weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  return weekDay[x];
}
function monthTranslation(y){
  var actualMonth = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  return actualMonth[y];
}


setInterval(function(){getTime()}, 1000);
