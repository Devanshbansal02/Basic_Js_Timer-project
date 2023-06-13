const hrs = document.getElementById('hour');
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');

const start = document.getElementById('start');
const reseter = document.getElementById('reset');
const stop = document.getElementById('stop');

var interval = null;
stop.addEventListener('click', function(){
    stopmusic();
})
start.addEventListener('click', function(){
    clearInterval(interval);
    start.classList.toggle('is-active');
    starter();
})
reseter.addEventListener('click', function() {
    start.classList.toggle('is-active');
    reset();
})

function starter(){
    interval = setInterval(Timer, 1000);
    
}

function reset(){
    // start.classList.toggle('is-active');
    clearInterval(interval);
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
}

function Timer(){
    total = Number(hrs.value)*60*60 + Number(min.value)*60 + Number(sec.value);
    total--;
    if(total >= 0){
        var hr = Math.floor(total/3600);
        var m = Math.floor((total/60 - hr*60));
        var s = Math.floor(total-m*60 - hr*3600);
        
        hour.value = hr;
        min.value = m;
        sec.value = s;
    }
    if(total == 0){
        start.classList.toggle('is-active');
        music();
    }
}

function music(){
    audio = new Audio("audio.mp3");
    audio.play();
}
function stopmusic(){
    audio.pause();
}