const url = "https://fakestoreapi.com/products";

let data = [];

async function getData() {
	const getProducts = await axios
		.get(url)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			return data;
		});

	getProducts.map((obj) => {
		obj.inCart = false;
	});

	return getProducts;
}

let list = document.getElementById("productList");

function updateData() {
	list.innerHTML = `${data
		.map(
			(data) =>
				`<div class="card mb-3">
                    <div class="card-header">
                        <h4>${data.title}</h4>
                        <p class="card-text">${data.price} €</p>
                    </div>

                    <img class="card-img" src="${
						data.image
					}" alt="Card image cap">
				    <div class="card-body">
					    <p class="card-text">${data.description}</p>
				    </div>
                    <div class="card-footer container bg-transparent">
                        <div class="row">
                            <div class="col">
                                <a href="#" class="btn btn-${
									data.inCart === true ? "success" : "info"
								}" onclick="addToShoppingCart(${data.id})">
                                ${
									data.inCart
										? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                        </svg>`
										: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>`
								}
                                </a>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                                <a href="#" class="btn btn-danger float-right" onclick="deletePost(${
									data.id
								})">
                                    Delete 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
		)
		.join("")}`;
}

function addToShoppingCart(id) {
	data.forEach((obj) => {
		if (obj.id === id) {
			obj.inCart = !obj.inCart;
		}
	});
	updateData();
}

async function deletePost(id) {
	const deleteProduct = await axios
		.get(`${url}/${id}`)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			return data;
		});

	if (deleteProduct && deleteProduct.id === id) {
		data = data.filter((obj) => obj.id !== id);
		updateData();
	} else {
		window.alert("ERROR: Unable to delete product!");
	}
}

window.onload = async () => {
	data = await getData();
	updateData();
};
