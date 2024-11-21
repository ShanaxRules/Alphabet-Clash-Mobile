var score=0;
var life=3;

document.getElementById('playnow').addEventListener('click' , function(){
    const val = document.getElementById('Shan');
    const val2 = document.getElementById('play');
  
    val.classList.add('hidden');
    val.classList.remove('flex');
    val2.classList.remove('hidden');
    continueGame();
    life=4;

});

function randomAlphabet(){
    const string = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = string.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alpha = alphabets[index];
    return alpha;
    
}

function continueGame(){
        const alphabet = randomAlphabet();
        const obj = document.getElementById('texter');
        obj.innerText = alphabet;
        setBGYellow(alphabet);
        


}

function setBGYellow(elementID){
    const obj = document.getElementById(elementID);
    obj.classList.add('bg-yellow-600');
    

}

function removeBG(elementID){
    const obj = document.getElementById(elementID);
    obj.classList.remove('bg-yellow-600');
}


function scoreAdder(){
    score++;
    const text = document.getElementById('scoreAble');
    text.innerText=score;
}

function LifeRemover(){
    life--;
    const lifer = document.getElementById('life');
    lifer.innerText=life;
   
}


function handleKeyboardPress(event){
    
    const playerPressed = event.target.innerText;
    const playerPressure = playerPressed.toLowerCase();
    
    const currentAlphabet = document.getElementById('texter').innerText;
    const currentAlphabet2 = currentAlphabet.toLowerCase();

    if (playerPressure == currentAlphabet2){
        removeBG(currentAlphabet2);
        scoreAdder();
        continueGame();
    }

    else if (playerPressure =="escape"){
        gameOver();
    }
    
    else{
        if (life==0){
            
            gameOver();
            life=3;
        }
        else LifeRemover();

    }
    
}

function gameOver(){
    const val = document.getElementById('play');
    const val2 = document.getElementById('scorecard');
    val.classList.add('hidden');
    val2.classList.remove('hidden');
    finalScoreAppender();
    const currentAlphabet = getElementTextByID('texter');
    removeBG(currentAlphabet);
    score=0;
    const elem = document.getElementById('scoreAble');
    elem.innerText=score;
    life=3;
    const elem2 = document.getElementById('life');
    elem2.innerText=life;

}

function finalScoreAppender(){
    const element = document.getElementById('final-score');
    element.innerText = score;
}

//the function maintaining it
document.addEventListener('click' ,handleKeyboardPress);

document.getElementById('playagain').addEventListener('click' , function(){
    const val = document.getElementById('Shan');
    const val2 = document.getElementById('scorecard');
    val.classList.remove('hidden');
    val2.classList.add('hidden');


});

function getElementTextByID(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


























