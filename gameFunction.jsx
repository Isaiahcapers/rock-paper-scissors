function getComputerChoice (){
    try {
        let computerselect = Math.round(Math.random() * 3);
    console.log("Computer math selection", computerselect, typeof computerselect);
    
    if (computerselect == 1) {
        getComputerChoice = "Rock"
    } else if (computerselect == 2) {
        getComputerChoice = "Paper"
    } else { 
        getComputerChoice = "Scissors"
    }
    return getComputerChoice
    } catch (error) {
        console.log("Choice Error",error);
    }
}
/* math random returns a number between 0 and 1 how do i get that number to choose between 3 choices, we could if else statements, if smaller than this hit rock if between these two hit paper if above here hit scissors*/ 

getHumanChoice = prompt("Rock, Paper Or Scissors?")
getComputerChoice()
console.log("Computer Hand",getComputerChoice);

console.log("Human Choice",getHumanChoice);
