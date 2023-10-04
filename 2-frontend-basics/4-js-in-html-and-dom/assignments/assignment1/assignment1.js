const elementTable = document.getElementById("studentTable");
const elementButton = document.getElementById("clickButton");

elementButton.addEventListener("click", studentToggle);

function studentToggle() {
	if (studentTable.style.visibility === "visible") {
		studentTable.style.visibility = "hidden";
	} else {
		studentTable.style.visibility = "visible";
	}
}

const students = [
	{ name: "Sami", score: 24.75 },
	{ name: "Heidi", score: 20.25 },
	{ name: "Jyrki", score: 27.5 },
	{ name: "Helinä", score: 26.0 },
	{ name: "Maria", score: 17.0 },
	{ name: "Yrjö", score: 14.5 },
];

let button = "<button>Click me...</button>";
let table = `<table>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    ${students
						.map(
							(student) =>
								`<tr><td>${student.name}</td><td>${student.score}</td></tr>`
						)
						.join("")}
                </tbody>
            </table>`;

clickButton.innerHTML = button;
studentTable.innerHTML = table;
