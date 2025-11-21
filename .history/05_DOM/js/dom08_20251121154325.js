const btnL = document.getElementById("btnL");
const btnS = document.getElementById("btnS");
const text = document.getElementById("text");

btnL.addEventListener("click" , ()=>{
    console.log("ボタンl");
    text.style.fontSize = "80px";
})

btnS.addEventListener("click" , ()=>{
    console.log("ボタンs");
    text.style.fontSize = "20px";
})