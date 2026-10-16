let products = [];

const getProductsdata = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    products = data.products.filter(product => product.category !== "groceries");

    const productscontainer = document.getElementById("products-container");

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "Product Image";

        const title = document.createElement("h1");
        title.textContent = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price.toFixed(2)}`;

        const decreaseBtn = document.createElement("button");
        decreaseBtn.textContent = "-";

        const increaseBtn = document.createElement("button");
        increaseBtn.textContent = "+";

        const additemspan = document.createElement("span");
        additemspan.textContent = "ADD";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decreaseBtn);
        div.appendChild(additemspan);
        div.appendChild(increaseBtn);

        productscontainer.appendChild(div);

        let counter = 0;

        increaseBtn.addEventListener("click", () => {
            counter++;
            additemspan.innerText = counter;

            localStorage.setItem("image", product.thumbnail);
            localStorage.setItem("title", product.title);
            localStorage.setItem("price", product.price);
        });

        decreaseBtn.addEventListener("click", () => {
            if (counter > 0) {
                counter--;
                additemspan.innerText = counter;
            }
        });
    }
};

getProductsdata();