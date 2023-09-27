// A.

const translatorObject: { [term: string]: string } = {
	hello: "hei",
	world: "maailma",
	bit: "bitti",
	byte: "tavu",
	integer: "kokonaisluku",
	boolean: "totuusarvo",
	string: "merkkijono",
	network: "verkko",
};

// B.

const printTranslatableWords = (): string[] => {
	return Object.keys(translatorObject);
};

const entries = printTranslatableWords();

console.log(entries); // [ 'hello', 'world', 'bit', 'byte', 'integer', 'boolean', 'string', 'network' ]

// C.

const translate = (term: string): string | null => {
	if (translatorObject[term]) {
		return translatorObject[term];
	} else {
		console.log(
			"No translation exists for word word given as the argument"
		);

		return null;
	}
};

const wordsToTranslate: string[] = ["hello", "bit", "byte", "boolean"];

const translation = wordsToTranslate.map((obj) => translate(obj));

console.log(translation); // [ 'hei', 'bitti', 'tavu', 'totuusarvo' ]

const wordsToTranslate2: string[] = ["boolean", "hamster"];

const translation2 = wordsToTranslate2.map((obj) => translate(obj));

console.log(translation2); // No translation exists for word word given as the argument [ 'totuusarvo', null ]
