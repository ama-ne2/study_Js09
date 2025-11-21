const school =document.getElementById("school");
const btn =document.getElementById("btn");
const text =document.getElementById("text");

// console.log(school);

btn.addEventListener("click" , ()=>{
    text.innerText = school.value;
})
