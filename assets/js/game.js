//Functions
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName = "Mr Roboto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")
};
    //Ask player FIGHT or SKIP
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Type FIGHT or SKIP to choose.");
    //Log fight or skip
console.log(promptFight);
    //If player types FIGHT
if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
//Check enemy's health
    if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
//check players health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    } else {
    window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
//If player chooses SKIP
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to skip?"),
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again 
    else {
        fight()
    }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}


  //calls 