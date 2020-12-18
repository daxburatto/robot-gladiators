//Functions
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10
console.log(playerName, playerHealth, playerAttack, playerMoney)

var enemyNames = ['Roberto', 'Amy Android', 'Robo Trumble']
var enemyHealth = 50
var enemyAttack = 12

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min)

    return value
}

var startGame = function() {
    //reset player stats
    playerHealth = 100
    playerAttack = 10
    playerMoney = 10
    //reset enemy stats
    

    for (let i = 0; i < enemyNames.length; i++) {
        //If the player has health
        if (playerHealth > 0) {
            //alert player of round number
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1))
        var pickedEnemyName = enemyNames[i]
        enemyHealth = randomNumber(40, 60)
        fight(pickedEnemyName)
        } else {
            break
        }
        //if not at last enemy in array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            //ask player if they want to go to shop
            var storeConfirm = window.confirm('The fight is over, visit the store before the next round?')
            //if yes, take them to the store() function
            if (storeConfirm) {
                shop()
            }
        }
    }

    endGame()
}

//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    } else {
    //if player is not alive, they lose!
        window.alert("You've lost your robot in battle.")
    }
    //ask to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")
    if (playAgainConfirm) {
        startGame()
        console.log("the game has restarted!")
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}

var shop = function() {
    var shopOptionPrompt = window.prompt('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Enter REFILL, UPGRADE, or LEAVE!')
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.")
            //increase players health
            playerHealth = playerHealth + 20
            playerMoney = playerMoney - 7
            } else {
                window.alert("You don't have enough money!")
            }
            break
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.")
            //increase players attack
            playerAttack = playerAttack + 6
            playerMoney = playerMoney - 7
            } else {
                window.alert("You don't have enough money!")
            }
            break
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.")
            break
        default:
            window.alert("You did not pick a valid option. Try again.")
            //call shop
            shop()
            break
    }
}

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
            var damage = randomNumber(playerAttack - 3, playerAttack)
            enemyHealth = Math.max(0, enemyHealth - damage)
            if (enemyHealth < 0) {
                enemyHealth = 0
            }
            // Log a resulting message to the console so we know that it worked.
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
            //award player money for winning
            playerMoney = Math.max(0, playerMoney + 10)
            if (playerMoney < 0) {
                playerMoney = 0
            }
            console.log('playerMoney', playerMoney)
            //leave while() loop because enemy has died
            break
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemyAttack - 3, enemyAttack)
        playerHealth = Math.max(0, playerHealth - damage)
        if (playerHealth < 0) {
            playerHealth = 0
        }
        // Log a resulting message to the console so we know that it worked.
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
    //check players health
    //If players health is 0
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

//start new game
startGame()