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
    li.innerHTML = `
     - ${product.id} 
     - <h3>${product.name}</h3>
     - <p> ${product.price} VND </p> 
     - <button class = "delete-btn"> Xóa</button> 
     - <button class="edit-price-btn">Sửa giá</button>
     `;

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

ulList.addEventListener("click",(event) => {
    if (event.target.classList.contains("delete-btn")) {
        let check = confirm("Bạn có chắc muốn xóa săn phẩm không");
        if (check) {
            let li = event.target.closest("li");
            li.remove();
        }
    }
})

ulList.addEventListener("click",(event) => {
    if (event.target.classList.contains("edit-price-btn")) {
        let check = confirm("Bạn có chắc muốn update giá sản phẩm không");
        if (check) {
            let newPrice = Number(prompt("Nhập vào giá mới VND"));
            let price =  newPrice.toLocaleString();
            let li = event.target.closest("li");
            let newPrive = li.querySelector("p");
            newPrive.innerText = newPrice.toLocaleString();
        }
    }
})

