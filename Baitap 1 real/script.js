const products = [
    { id: 1, name: "Laptop Dell Inspiron", price: 15000000 },
    { id: 2, name: "Chuột Logitech G102", price: 350000 },
    { id: 3, name: "Bàn phím cơ RK61", price: 890000 },
    { id: 4, name: "Tai nghe Sony WH-1000XM4", price: 6500000 },
    { id: 5, name: "Màn hình LG 24 inch", price: 3200000 },
    { id: 6, name: "Ổ cứng SSD Samsung 1TB", price: 2100000 },
];

const ulList = document.querySelector("#product-list");

products.forEach((el) => {
    const divCreate = document.createElement("div");
    divCreate.classList.add("product");

    divCreate.innerHTML = `
    <p>${el.id} - ${el.name} -  ${el.price} VND}</p>
    -----------------------------------------------

    `
    ulList.appendChild(divCreate);
})