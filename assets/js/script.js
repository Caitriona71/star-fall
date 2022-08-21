document.addEventListener('click', clickedIt);
var score=0, count=0;

function clickedIt(){
    score++;
    scoreBox.innerHTML='score:'+score;
    star.style.height='1px';
}