var Date= 20


//const startingMinutes = 01;
//let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
        const day  = Math.floor((Date/(60*60*24) % 7);;
        const hour =  Math.floor((Date/(60*60)) % 24);
        const minutes =  Math.floor((Date/60) % 60);
        let seconds = minutes % 60;                                 
    //seconds = seconds < 15 ? '0' + seconds : seconds;    
    countdownEl.innerHTML =`${day}:${hour}:${minutes}:${seconds}`;
date--;
}