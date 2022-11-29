const moves = ["Rock","Paper","Scissor"];

function getcomputerSelection(){
    return (moves[Math.floor(Math.random()*moves.length)]);
}

function playRound(playerSelection, computerSelection)
{
    playerSelectionUC = playerSelection.toUpperCase();
    if (playerSelectionUC == "PAPER"){
        switch (computerSelection){
            case ("Paper"):
                return ("Draw");
                break;
            case ("Scissor"):
                return ("You lose! Scissor beats Paper");
                break;
            default:
                return ("You win! Paper beats Rock!");
        }
    }
    else if (playerSelectionUC == "ROCK"){
        switch (computerSelection){
            case ("Paper"):
                return ("You lose! Paper beats Rock");
                break;
            case ("Scissor"):
                return ("You win! Rock beats Paper");
                break;

            default:
                return ("Draw!");
        }
    }
    else if (playerSelectionUC == "SCISSOR") {
        switch (computerSelection){
            case ("Paper"):
                return ("You win! Scissor beats Paper");
                break;
            case ("Rock"):
                return ("You lose! Rock beats Scissor");
                break;
            default:
                return("Draw!");
        }
    }
    else
    {
        return ("Please enter valid value");

    }
}

function game()
{
    for (let i = 0; i < 5 ; i++)
    {
        let select = prompt("Choose Rock,Paper or Scissor");
        console.log(playRound(select,getcomputerSelection()));
    }

}

game();
