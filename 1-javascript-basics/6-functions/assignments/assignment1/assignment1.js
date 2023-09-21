// A.
const language = "PL";

const hello = () => {
	if (language === "EN") {
		console.log("Hello world");
	} else if (language === "FI") {
		console.log("Hei maailmaa");
	} else if (language === "PL") {
		console.log("Witaj świecie");
	}
};

hello(language);

// B.

const helloWorld = (languageParam) => {
	if (languageParam === "EN") {
		console.log("Hello world");
	} else if (languageParam === "FI") {
		console.log("Hei maailmaa");
	} else if (languageParam === "PL") {
		console.log("Witaj świecie");
	}
};

helloWorld("EN");
helloWorld("FI");
helloWorld("PL");
