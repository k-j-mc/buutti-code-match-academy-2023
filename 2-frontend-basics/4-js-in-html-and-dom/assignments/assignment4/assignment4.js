let userName = "";
let postContent = "";

let data = [
	{
		name: "Daryl",
		post: "Something something something, lots of text",
		likes: 9,
		id: 0,
	},
	{
		name: "Joan",
		post: "Something totally different and some text aboout stuff",
		likes: 20,
		id: 1,
	},
	{
		name: "Jimmy",
		post: "Another post about stuff that people like to react to and read or something.....",
		likes: 2,
		id: 2,
	},
];

let list = document.getElementById("postList");
let button = document.getElementById("makePost");
let elementForm = document.getElementById("postForm");

button.addEventListener("click", makePost);

let ul = "";

function getData() {
	document.getElementById("postList").innerHTML = `${data
		.map(
			(data) =>
				`<div class="card mb-3">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-4">
                                <h4><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                ${data.name}</h4>
                            </div>
                            <div class="col-4" />
                            </div>
                            <div class="col-4 float-right">
                                <h4 class="float-right"><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg> ${data.likes}</h4>
                            </div>
                        </div>
                    </div>

				    <div class="card-body">
					    <p class="card-text">${data.post}</p>
				    </div>

                    <div class="card-footer container bg-transparent">
                        <div class="row">
                            <div class="col">
                                <a href="#" class="btn btn-primary" onclick="likePost(${data.id})">
                                    Like 
                                </a>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                                <a href="#" class="btn btn-danger float-right" onclick="deletePost(${data.id})">
                                    Delete 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
		)
		.join("")}`;
}

window.onload = () => {
	getData();
};

function likePost(id) {
	data.forEach((obj) => {
		obj.id === id && obj.likes++;
	});
	getData();
}

function deletePost(id) {
	data = data.filter((obj) => obj.id !== id);
	getData();
}

function makePost() {
	if (postForm.style.visibility === "visible") {
		postForm.style.visibility = "hidden";
		postForm.style.height = "0";
	} else {
		postForm.style.visibility = "visible";
		postForm.style.height = "100%";
	}
}

let form = `
		<div class="form-group mb-5">
			<div class="mb-3">
				<input
					type="username"
					class="form-control input-lg"
					id="username"
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="Your name here..."
					aria-label="username"
					onchange="changeUserName(this.value)"
				/>
			</div>

			<div class="mb-3">
				<textarea
					type="post"
					class="form-control input-lg"
					id="post"
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="What is on your mind?"
					aria-label="Post"
					cols="40"
					rows="5"
					onchange="changePostContents(this.value)"
				></textarea>
			</div>

			<button class="btn btn-primary" onclick="onSubmit(event)">
				Submit!
			</button>
		</div>
`;

function changeUserName(event) {
	userName = event;
}

function changePostContents(event) {
	postContent = event;
}

function onSubmit(e) {
	e.preventDefault();

	if (userName === "" || postContent === "") {
		window.alert("ERROR: Post must contain your name and details!");
	} else {
		const newPost = {
			name: userName,
			post: postContent,
			likes: 0,
			id: data.length,
		};

		data.unshift(newPost);
		getData();

		userName = "";
		postContent = 0;

		document.getElementById("postForm").reset();
	}
}

postForm.innerHTML = form;
