//Functions
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100
var playerAttack = 25
var playerMoney = 10
console.log(playerName, playerHealth, playerAttack, playerMoney)

var enemyNames = ['Roberto', 'Amy Android', 'Robo Trumble']
var enemyHealth = 50
var enemyAttack = 12

var fight = function(enemyName) {
//repeat and execute as long as enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
    //Ask player FIGHT or SKIP
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Type FIGHT or SKIP to choose.")
    //If player chooses to SKIP
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            var confirmSkip = window.confirm('Are you sure you want to skip this fight?')
           
            //if yes (true), leave FIGHT
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!')
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10
                console.log('playerMoney', playerMoney)
                break
            }
        }
    //If player types FIGHT
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack
            // Log a resulting message to the console so we know that it worked.
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
            //award player money for winning
            playerMoney = playerMoney + 20
            console.log('playerMoney', playerMoney)
            //leave while() loop because enemy has died
            break
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack
        // Log a resulting message to the console so we know that it worked.
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
    //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!")
            break 
        //end loop, player has died!
        } else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.")
            }
        }
    }
}

  //calls 

//var fight
for (let i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i]
    enemyHealth = 50
    fight(pickedEnemyName)
}