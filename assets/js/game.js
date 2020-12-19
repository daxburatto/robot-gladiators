//Functions
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min)

    return value
}

var getPlayerName = function () {
    var name = ""
    while (name === "" || name === null) {
        name = prompt("What is your name?")
    }
    console.log("Your robot's name is " + name)
    return name
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100
        this.money = 10
        this.attack = 10
    }, 
    refillHealth: function () {
        this.health += 20
        this.money -= 7
    },
    upgradeAttack: function() {
        this.attack += 6
        this.money -= 7
    }
}

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
]

var startGame = function() {
    //reset player stats
    playerInfo.reset()

    for (let i = 0; i < enemyInfo.length; i++) {
        //If the player has health
        if (playerInfo.health > 0) {
            //alert player of round number
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1))
        var pickedEnemyObj = enemyInfo[i]
        pickedEnemyObj.health = randomNumber(40, 60)
        fight(pickedEnemyObj)
        } else {
            break
        }
        //if not at last enemy in array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".")
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
            playerInfo.refillHealth()
            break
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack()
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

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?")
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.")
        return fightOrSkip() 
    }
    return promptFight
    promptFight = promptFight.toLocaleLowerCase()
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you't like to quit?")

        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye")
            playerInfo.money -= Math.max(0, playerInfo.money - 10)
            return true
        }
    }
} 

var fight = function(enemy) {
//repeat and execute as long as enemy-robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {
    //Ask player FIGHT or SKIP
        if (fightOrSkip()) {
            break
        }
            // Log a resulting message to the console so we know that it worked.
            console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        )
        //Check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!")
            //award player money for winning
            playerInfo.money = Math.max(0, playerInfo.money + 10)
            if (playerInfo.money < 0) {
                playerInfo.money = 0
            }
            console.log('playerInfo.money', playerInfo.money)
            //leave while() loop because enemy has died
            break
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.")
        }
        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage)
        if (playerInfo.health < 0) {
            playerInfo.health = 0
        }
        // Log a resulting message to the console so we know that it worked.
        console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        )
    //check players health
    //If players health is 0
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!")
            break 
        //end loop, player has died!
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.")
        }
    }
}
  //calls 

//start new game
startGame()