"use strict";
let elList = document.querySelector(".todo-list");
function rendTodo(arr, list) {
    list.innerHTML = ``;
    arr.forEach((item, index) => {
        let elItem = document.createElement('li');
        elItem.className = "flex items-center justify-between p-2bg-slate-200 rounded-md ";
        elItem.innerHTML = `
        <div class="flex">
        <img class = "img-render" src =${item.img}  />
        <strong>${item.title}</strong>
        <p>${item.info}</p>
        </div>
        `;
        list.append(elItem);
    });
}
function renderJSON(API) {
    fetch(API).then((res) => res.json()).then((data) => {
        const products = data.products.map((item) => {
            const obj = {
                id: item.id,
                title: item.title,
                // img: item.img[0],
                info: item.description
            };
            return obj;
        });
        console.log(products);
        rendTodo(products, elList);
    });
}
renderJSON("https://dummyjson.com/products");
