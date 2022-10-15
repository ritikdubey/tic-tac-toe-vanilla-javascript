let filledArray = [];
let allPlaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let redMoves = [];
let blueMoves = [];
let blueTurn = false;
let gameOver = false;

function move(e){
    if(gameOver){
        return;
    }
    let index = Number(e.target.attributes.id.value);
    if(filledArray.includes(index)){
        return;
    }
    const currentTurnDiv = document.getElementById("currentTurn");
    const clickedDiv = document.getElementById(index);
    if(blueTurn){
        if(!filledArray.includes(index)){
            blueMoves.push(index);
            clickedDiv.classList.add('blue');
            filledArray.push(index)
        }
    }
    else{
        if(!filledArray.includes(index)){
            redMoves.push(index);
            clickedDiv.classList.add('red');
            filledArray.push(index)
        }
    }
    if(blueTurn){
        currentTurnDiv.innerText = 'Red';
        currentTurnDiv.style.color = 'Red';
    }
    else if(!blueTurn){
        currentTurnDiv.innerText = 'Blue';
    }
    blueTurn = !blueTurn;
    checkResult();
}

function checkResult(){
    if(filledArray.length===9)
    {
        gameOver = true;
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = 'Draw';
        const newGameBtn = document.getElementById('newGameBtn');
        newGameBtn.style.display = 'block';
    }
    if((redMoves.includes(1) && redMoves.includes(2) && redMoves.includes(3)) ||
       (redMoves.includes(4) && redMoves.includes(5) && redMoves.includes(6)) ||
       (redMoves.includes(7) && redMoves.includes(8) && redMoves.includes(9)) || 
       (redMoves.includes(1) && redMoves.includes(5) && redMoves.includes(9)) || 
       (redMoves.includes(3) && redMoves.includes(5) && redMoves.includes(7)) || 
       (redMoves.includes(1) && redMoves.includes(4) && redMoves.includes(7)) ||
       (redMoves.includes(2) && redMoves.includes(5) && redMoves.includes(8)) ||  
       (redMoves.includes(3) && redMoves.includes(6) && redMoves.includes(9)) 
       ){
        gameOver = true;
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = 'Red Won!';
    }
    else if((blueMoves.includes(1) && blueMoves.includes(2) && blueMoves.includes(3)) ||
       (blueMoves.includes(4) && blueMoves.includes(5) && blueMoves.includes(6)) ||
       (blueMoves.includes(7) && blueMoves.includes(8) && blueMoves.includes(9)) || 
       (blueMoves.includes(1) && blueMoves.includes(5) && blueMoves.includes(9)) || 
       (blueMoves.includes(3) && blueMoves.includes(5) && blueMoves.includes(7)) || 
       (blueMoves.includes(1) && blueMoves.includes(4) && blueMoves.includes(7)) ||
       (blueMoves.includes(2) && blueMoves.includes(5) && blueMoves.includes(8)) ||  
       (blueMoves.includes(3) && blueMoves.includes(6) && blueMoves.includes(9)) 
       ){
        gameOver = true;
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = 'Blue Won!';
    }
}