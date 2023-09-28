"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var sentenceToWrite = "Joulu on taas, joulu on taas, kattilat täynnä puuroo. Nyt sitä saa, nyt sitä saa vatsansa täyteen puuroo. Joulu on taas, joulu on taas, voi, kuinka meill on hauskaa! Lapsilla on, lapsilla on aamusta iltaan hauskaa.";
var wordDetect1 = "joulu";
var wordDetect2 = "lapsilla";
var wordReplace1 = "kinkku";
var wordReplace2 = "poroilla";
var editedSentence = "";
fs.writeFileSync("textFile1.txt", sentenceToWrite);
var readData = fs.readFileSync("textFile1.txt", "utf8");
console.log(readData);
console.log("////////////////////////////////////");
editedSentence = readData
    .split(" ")
    .map(function (word) {
    return word.toLowerCase() === wordDetect1
        ? wordReplace1
        : word.toLowerCase() === wordDetect2
            ? wordReplace2
            : word;
})
    .join(" ");
fs.writeFileSync("textFile2.txt", editedSentence);
var readEditedData = fs.readFileSync("textFile2.txt", "utf8");
console.log(readEditedData);
