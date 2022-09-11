arr = ['rock', 'paper', 'scissor'];
var result = '';
function getComputerChoice() {
    var r1 = Math.floor(Math.random() * arr.length);
    // console.log(arr[r1]);
    return arr[r1];
}

var userchoice = { 'rock': 0, 'paper': 0, 'scissor': 0 };

function Rhumanchoice() {
    result = 'rock';
    console.log(result);
    var c = getComputerChoice();
    getComputerChoice();
    console.log('the choice of computer is', c);
    displayresult(result, c);
    return result;

}
function Phumanchoice() {
    result = 'paper';
    console.log(result);
    getComputerChoice();
    var c = getComputerChoice();
    console.log('the choice of computer is', c);
    displayresult(result, c);
    return result;
}
function Shumanchoice() {
    result = 'scissor';
    console.log(result);
    getComputerChoice();
    var c = getComputerChoice();
    console.log('the choice of computer is', c);
    displayresult(result, c);
    return result;
}

function clean() {
    console.log('cleaning all')
    result = '';
    computerchoice = '';
    // document.getElementById('result').innerText = 'lets play again';
}

function displayresult(result, computerchoice) {

    document.getElementById('pc').innerText = 'You chose : ' + result;
    document.getElementById('cc').innerText = 'Processor chose: ' + computerchoice;

    if (result == 'rock' && computerchoice == 'scissor') {
        document.getElementById('result').innerText = 'you won';
    }
    else if (result == 'scissor' && computerchoice == 'paper') {
        document.getElementById('result').innerText = 'you won';
    }
    else if (result == 'paper' && computerchoice == 'rock') {
        document.getElementById('result').innerText = 'you won';
    }
    else if (result == 'scissor' && computerchoice == 'scissor') {
        document.getElementById('result').innerText = 'it is a draw';
    } else if (result == 'rock' && computerchoice == 'rock') {
        document.getElementById('result').innerText = 'it is a draw';
    } else if (result == 'paper' && computerchoice == 'paper') {
        document.getElementById('result').innerText = 'it is a draw';
    }
    else {
        document.getElementById('result').innerText = 'you lost';
    }
    clean();
}
function startagain() {
    document.getElementById('result').innerText = 'lets play again';
    document.getElementById('pc').innerText = '';
    document.getElementById('cc').innerText = '';

}