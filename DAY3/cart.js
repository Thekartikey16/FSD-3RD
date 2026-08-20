const cartcontainer = document.createElement("div");
cartcontainer.id = "cart-container";

const div = document.createElement("div");

const img = document.createElement("img");
img.src = localStorage.getItem("image");
img.alt = "Product Image";

const title = document.createElement("h1");
title.innerText = localStorage.getItem("title");

const price = document.createElement("h2");
price.innerText = `$${localStorage.getItem("price")}`;

div.appendChild(img);
div.appendChild(title);
div.appendChild(price);

cartcontainer.appendChild(div);

document.body.appendChild(cartcontainer);