/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, diceRoll = 0, dice2Roll = 0, goal = 100;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Get a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'

        var diceDOM2 = document.querySelector('.dice2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png'
    
        // 3. Update the round score IF the rolled number was NOT a 1.
    
        if (dice !== 1 && dice2 !== 1) {
            //Add dice value to roundScore
            roundScore += dice + dice2;
            // If a six is rolled twice in a row player loses ALL points.
            if (diceRoll === 6 && dice === 6 || dice2Roll === 6 && dice2 === 6) {
                document.querySelector('.message-box').classList.add('message-box-active');
                document.querySelector('.message-box').textContent = 'You rolled a six in a row, all points lost! :(';
                // Player looses scores.
                scores[activePlayer] = 0;
                roundScore = 0;
                //DOM is updated
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                //Last dice roll is set back to zero.
                diceRoll = 0;
                dice2Roll = 0;
            } else {
                document.querySelector('.message-box').classList.remove('message-box-active');
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            diceRoll = dice;
            diceRoll = dice2;
        } else {
            document.querySelector('.message-box').classList.add('message-box-active');
            document.querySelector('.message-box').textContent = 'You rolled a one, next player\'s turn!';
            //Next player's turn
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add currentScore to globalScore.
        scores[activePlayer] += roundScore;
        
        // Update the UI.
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // Check if the player has won the game.
    
        if (scores[activePlayer] >= goal) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            // Next player's turn
            nextPlayer();
        }   
    }
})

function nextPlayer() {
        //Next player's turn
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        diceRoll = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

// Sets all values to the initial values. 
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;
}


// Allows the players to define the target score for winning the game.
document.querySelector('.winning-score').addEventListener('change', function() {
    goal = this.value;
});









/* document.querySelector('#current-' + activePlayer).textContent = dice; */
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
/* var x = document.querySelector('#score-0').textContent;
console.log(x); */