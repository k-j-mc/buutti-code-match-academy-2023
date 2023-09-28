// A.

const numberArray: number[] = [];

let sumNumber: number = 0;

const sum = (limit: number) => {
	for (let i = 0; i <= limit; i++) {
		numberArray.push(i);
	}

	numberArray.map((number: number) => {
		sumNumber += number;
	});

	return sumNumber;
};

// console.log(sum(10)); // prints 55 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

// B.

const numberArrayPromise: number[] = [];

let sumNumberPromise: number = 0;

const sumPromise = (limit: number) =>
	new Promise((resolve, reject) => {
		for (let i = 0; i <= limit; i++) {
			numberArrayPromise.push(i);
		}

		numberArrayPromise.map((number: number) => {
			sumNumberPromise += number;
		});

		if (sumNumberPromise > limit) {
			resolve(sumNumberPromise);
		} else {
			reject("Error");
		}
	})
		.then((value) => {
			console.log(value);
		})
		.catch((error) => {
			console.log(error);
		});

// sumPromise(50000); // prints 1250025000 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10...............)

// C.

const numberArrayPromiseTimeOut: number[] = [];

let sumNumberPromiseTimeOut: number = 0;

let timeFunction = function (arg: number, func: any) {
	setTimeout(() => {
		func();
	}, arg);
};

const sumPromiseTimeOut = (limit: number) =>
	new Promise((resolve, reject) => {
		for (let i = 0; i <= limit; i++) {
			numberArrayPromiseTimeOut.push(i);
		}

		numberArrayPromiseTimeOut.map((number: number) => {
			sumNumberPromiseTimeOut += number;
		});

		if (sumNumberPromiseTimeOut > limit) {
			timeFunction(2000, () => {
				resolve(sumNumberPromiseTimeOut);
			});
		} else {
			reject("Error");
		}
	})
		.then((value) => {
			console.log(value);
		})
		.catch((error) => {
			console.log(error);
		});

// sumPromiseTimeOut(50000); // prints 1250025000 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10...............)

// D.

let numberArrayDelayedCalculation: number[] = [];

let sumNumberDelayedCalculation: number = 0;

let timeFunction2 = function (arg: number, func: any) {
	setTimeout(() => {
		func();
	}, arg);
};

let createDelayedCalculation = (limit: number, milliseconds: number) =>
	new Promise((resolve, reject) => {
		timeFunction2(milliseconds, () => {
			numberArrayDelayedCalculation = [];

			sumNumberDelayedCalculation = 0;

			for (let i = 0; i <= limit; i++) {
				numberArrayDelayedCalculation.push(i);
			}

			numberArrayDelayedCalculation.map((number: number) => {
				sumNumberDelayedCalculation += number;
			});

			if (sumNumberDelayedCalculation > limit) {
				resolve(sumNumberDelayedCalculation);
			} else {
				reject("Error");
			}
		});
	});

// const countingPromises = async () => {
// 	// Prints 200000010000000 after a delay of 2 seconds
// 	console.log(
// 		await createDelayedCalculation(20000000, 2000).then((result) => result)
// 	);

// 	// Prints 1250025000 after a delay of 0.5 seconds
// 	console.log(
// 		await createDelayedCalculation(50000, 500).then((result) => result)
// 	);
// };

// countingPromises();

// Prints 200000010000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then((result) => console.log(result));

// Prints 1250025000 after a delay of 0.5 seconds
createDelayedCalculation(50000, 500).then((result) => console.log(result));

// E.
// Depends quite much on how the user has decided that they want these numbers to be processed...
// The number 200000010000000 will be printed first in the above countingPromises function,
// as there is an order provided by the async/await.
// However, the order is changed by just calling the function without await (non commented code),
// as we have not specified for this process to be done first and 1250025000 will print first,
// as the delay time is shorter.
