const Ps =Number(prompt("Photoshopの点数は?"));

const Ai=Number(prompt("Illustratorの点数は?"));

const average =(Ps + Ai) / 2;

console.log(average);


if(average >= 0 || average <= 30){
    console.log("がんばりなさい");
}
else if(average >= 31 || average <= 60){
    console.log("まずまずね");
}
else if(average >= 61 || average<=100 ){
    console.log("頑張ったね");
    
}