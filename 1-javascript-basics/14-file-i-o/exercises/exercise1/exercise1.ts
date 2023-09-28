import * as fs from "fs";

const sentenceToWrite: string =
	"Joulu on taas, joulu on taas, kattilat täynnä puuroo. Nyt sitä saa, nyt sitä saa vatsansa täyteen puuroo. Joulu on taas, joulu on taas, voi, kuinka meill on hauskaa! Lapsilla on, lapsilla on aamusta iltaan hauskaa.";

const wordDetect1 = "joulu";
const wordDetect2 = "lapsilla";

const wordReplace1 = "kinkku";
const wordReplace2 = "poroilla";

let editedSentence: string = "";

fs.writeFileSync("textFile1.txt", sentenceToWrite);

const readData = fs.readFileSync("textFile1.txt", "utf8");

console.log(readData);

console.log("////////////////////////////////////");

editedSentence = readData
	.split(" ")
	.map((word) =>
		word.toLowerCase() === wordDetect1
			? wordReplace1
			: word.toLowerCase() === wordDetect2
			? wordReplace2
			: word
	)
	.join(" ");

fs.writeFileSync("textFile2.txt", editedSentence);

const readEditedData = fs.readFileSync("textFile2.txt", "utf8");

console.log(readEditedData);
