document.addEventListener('click', clickedIt);
var score=0, count=0;

function clickedIt(){
    score++;
    scoreBox.innerHTML='score:'+score;
    star.style.height='1px';
}

function moveStar(){
    star.style.height='160px';
    star.style.left=Math.random()*800+'px';
    star.style.top=Math.random()*600+'px';
    count++;
    if(count==20){
        alert('game over!');
        clearInterval(timer);
    }
}