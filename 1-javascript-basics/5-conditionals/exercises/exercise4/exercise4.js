const isTrue = true;
const isFalse = false;

if (isTrue && isFalse) {
	console.log("Both are true");
} else if (!isTrue && !isFalse) {
	console.log("Neither isTrue nor isFalse are true");
} else if (isTrue && !isFalse) {
	console.log("isTrue is true & isFalse is false");
} else if (!isTrue && isFalse) {
	console.log("isTrue is false & isFalse is true");
} else {
	console.log("error");
}
