const size = document.getElementById("size");
const text = document.getElementById("text");

// console.log(size);
size.addEventListener("change" , ()=>{
    text.innerText = `${size.value}が選択されました`;
})