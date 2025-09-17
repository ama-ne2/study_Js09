let num =Number(prompt());

if(num<0 ||num>50){
    console.log("num");
}
else{
    console.log("1から50の数値を入れてください");
}

for(let i=0; i<num; i++){
    console.log(i+1+"回目");
}