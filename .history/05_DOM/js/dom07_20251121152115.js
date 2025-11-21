const item = document.getElementById("item_name");
const size = document.getElementById("size");
const btn = document.getElementById("btn");
const list = document.getElementById("orderlist");

btn.addEventListener("click" , ()=>{
    // console.log("a");
    list.innerText += `<li>${size.value}サイズ${item.value}</li>`
})