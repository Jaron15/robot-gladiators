var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
}   
    promptFight = promptFight.toLowerCase();
   if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            return true;
        }
        
    }
return false;
}
var fight = function(enemy) {
    console.log(enemy);
while(playerInfo.health > 0 && enemy.health > 0) {
     if (fightOrSkip()) {
         break;
     };

    //subtract the value of 'player attack' from the value of 'enemyHealth' and use that result to update the value in the `enemyHealth` variable
   var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
    enemy.health = Math.max(0, enemy.health - damage);
    // Log a resulting message to the console so we know that it worked.
console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
);
     //check enemy's health
     if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        // award player money for winning and leave
        playerInfo.money = playerInfo.money + 20;
        break;
    }
    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

     //check player's health
     if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " has died!");

        break;
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    
}
};
var startGame = function() {
    //reset player stats
     playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {
    if(playerInfo.health > 0) {
    window.alert("welcome to Robot Gladiators! Round " + (i + 1));
        
    var pickedEnemyObj = enemyInfo[i];

    pickedEnemyObj.health = randomNumber(40, 60);
    
    fight(pickedEnemyObj);

    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        if (storeConfirm) {
            shop();
        }
    }

    }
else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
}
//play again
endGame();
};
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if(playerInfo.health > 0 ) {
        window.alert("Great job, you've survived the game! You have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    ); 
    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("Your did not pick a valid option. Try again.");
            shop();
            break;
    }
};
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;

}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 100,
    money:10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -=7;
    }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >=7) {
        window.alert("You don't have enough money!");
        this.attack +=6;
        this.money -=7
        }
        else {
            window.alert("You dont have enough money!")
        }
    }
};

var enemyInfo = [
    {
    name: "Roborto",
    attack: randomNumber(10, 14)
    },
    {
    name: "Amy Android",
    attack: randomNumber(10, 14)
    },
    {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];
startGame();