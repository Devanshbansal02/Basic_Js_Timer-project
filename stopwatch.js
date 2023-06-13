window.onload = function(){
    [sec, min, hrs] = [0,0,0];
    displayTime = document.querySelector(".time");
    timer= null;
    function stopwatch(){
        sec++;
        if(sec == 60){
            sec=0;
            min+=1;
            if(min == 60){
                min=0;
                hrs+=1;
            }
        }
        h = hrs < 10 ? "0" + hrs : hrs;
        m = min < 10 ? "0" + min : min;
        s = sec < 10 ? "0" + sec : sec;
        displayTime.innerHTML = h + ":" + m + ":" + s;
    }
    
    function stoptimer(){
        clearInterval(timer);
    }
    
    function reset(){
        clearInterval(timer);
        [sec, min, hrs] = [0,0,0];
        displayTime.innerHTML = "00:00:00";
    }

    function start(){
        timer = setInterval(stopwatch,1000);
    }
    const play = document.querySelector('.play');
    play.addEventListener('click', function() {
        play.classList.toggle('is-active');
        start();
    })
    const stop = document.querySelector('.stop');
    stop.addEventListener('click', function() {
        play.classList.toggle('is-active');
        stoptimer();
    })
    const reseter = document.querySelector('.reset');

    reseter.addEventListener('click', function() {
        // play.classList.toggle('is-active');
        reset();
    })

}
