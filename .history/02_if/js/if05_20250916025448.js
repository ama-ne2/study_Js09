const Ps =Number(prompt("Photoshopの点数は?"));

const Ai=Number(prompt("Illustratorの点数は?"));

const average =(Ps + Ai / 2);

if(average <= 0 && average>=30){
    console.log("がんばりなさい");
}