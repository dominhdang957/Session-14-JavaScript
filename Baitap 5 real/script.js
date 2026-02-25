const products = [
    { id: 1, name: "Laptop Dell Inspiron", price: 15000000 },
    { id: 2, name: "Chuột Logitech G102", price: 350000 },
    { id: 3, name: "Bàn phím cơ RK61", price: 890000 },
    { id: 4, name: "Tai nghe Sony WH-1000XM4", price: 6500000 },
    { id: 5, name: "Màn hình LG 24 inch", price: 3200000 },
    { id: 6, name: "Ổ cứng SSD Samsung 1TB", price: 2100000 },
];

const ulList = document.querySelector("#product-list");
const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");

function renderProduct(product) {
    const li = document.createElement("li");
    li.classList.add("product-item");
    li.textContent = `${product.id} - ${product.name} - ${product.price} VND`;
    ulList.appendChild(li);
}

products.forEach(renderProduct);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = productName.value.trim();
    const price = Number(productPrice.value);

    if (!name || !price) return;

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(newProduct);
    renderProduct(newProduct);

    productName.value = "";
    productPrice.value = "";
});

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (event) => {
    let keyWord =  searchInput.value;
    const productItem = document.querySelectorAll(".product-item");
    productItem.forEach((item) => {
        let productItemName = item.textContent.toLowerCase();

        if (productItemName.includes(keyWord)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
})