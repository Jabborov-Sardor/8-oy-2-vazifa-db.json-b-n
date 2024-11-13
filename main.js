"use strict";
let elList = document.querySelector(".todo-list");
function renderJSON(API) {
    fetch(API).then((res) => res.json()).then(data => {
        console.log(data.products);
    });
}
renderJSON("https://dummyjson.com/products");
