const COLORS_ARRAY = ['blue' , 'cyan','gold', 'gray', 'green', 'magenta' , 'orange',  'red', 'white', 'yellow'];
let guess = "" ;
let correct = false;
const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length -1);
const target = COLORS_ARRAY[targetIndex];
numTries = 0;


function runGame(){

    
    do{

        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join( " , " ) + '\n\nWhat color am I thinking of?\n');
        numTries += 1;

            if (guess === null){
                alert("you exited the game.");
                return;
            }
            correct = checkGuess(guess, target);

           
}  while(!correct);

document.body.style.background = guess;
alert('Congratulations!!! ' + 'it took you ' + numTries + ' tries to get it right.')
}

function checkGuess(guess, target){
    let correct = false;
    if(COLORS_ARRAY.includes*guess){
        alert('Please enter a color within the range given');
    }else if (guess > target){
        alert('your color is higher!');
    }else if (guess < target){
        alert('your color is lower!');
    }else {
        correct = true;
    }
    return correct;
}