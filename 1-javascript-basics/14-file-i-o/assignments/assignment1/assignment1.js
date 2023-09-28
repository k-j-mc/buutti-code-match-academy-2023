"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var userResponse = "";
var counter = 0;
var botName = "stup1d0-b0T";
var userName = "";
var commandString = " \n-----------------------------\nHere´s a list of commands that I can execute!\n\nhelp: Opens this dialog.\nhello: I will say hello to you\nbotInfo: I will introduce myself\nbotName: I will tell my name\nbotRename: You can rename me\nforecast: I will forecast tomorrows weather 100% accurately\nquit: Quits the program.\n-----------------------------\n\n";
userResponse = readline.question("Hi! I am a dumb chat bot You can check all the things I can do by typing 'help'.\n");
var userChoice = function () {
    counter++;
    if (userResponse === "quit") {
        console.log("Byeeee");
    }
    else {
        if (userResponse === "hello") {
            if (userName) {
                console.log("Hello ".concat(userName));
            }
            else {
                var askName = readline.question("What is your name?\n");
                userName = askName;
                console.log("Hello there ".concat(userName));
            }
        }
        else if (userResponse === "botInfo") {
            console.log("Hello I am ".concat(botName, " and you have interacted with me a total of ").concat(counter, " times"));
        }
        else if (userResponse === "botName") {
            console.log("My name is ".concat(botName, ", if you want to change it, type botRename!"));
        }
        else if (userResponse === "botRename") {
            console.log("My name is ".concat(botName));
            var name_1 = readline.question("What should my new name be?\n");
            var newName = readline.question("Is ".concat(name_1, " more suitable for you to call me? (yes / no)\n"));
            if (newName === "yes") {
                botName = name_1;
                console.log("My name is ".concat(botName, "!"));
            }
            else {
                console.log("OK! I shall continue to be ".concat(botName));
            }
        }
        else if (userResponse === "forecast") {
            var question = readline.question("Do you enjoy summer time? (yes / no)\n");
            if (question === "yes") {
                console.log("Tomorrow will 100% be muddy and rainy, very nice!");
            }
            else {
                console.log("Tomorrow will be 40 degrees and very sunny!");
            }
        }
        else if (userResponse === "help") {
            console.log("One moment please...");
        }
        else {
            console.log("Sorry I do not understand...");
        }
        setTimeout(helpMenuFunction, 3000);
    }
};
var helpMenuFunction = function () {
    userResponse = readline.question(commandString);
    userChoice();
};
if (userResponse !== "quit") {
    helpMenuFunction();
}
