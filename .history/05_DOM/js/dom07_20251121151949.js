const item = document.getElementById("item_name");
const size = document.getElementById("size");
const btn = document.getElementById("btn");
const list = document.getElementById("orderlist");

btn.addEventListener("click" , ()=>{
    // console.log("a");
    list.innerText = `&lt;li&glt;${size.value}サイズ${item.value}</li>`
})