const item = Number(prompt());

if(item<0|| item>=24){
    console.log("そんな時間ありません");
}
else if(item>=1 && item<=6){
    console.log("おやすみなさい");
}
else if(item>=7 && item<=11){
    console.log("おはようございます");
}
else if(item ==12){
    console.log("お昼ご飯");
}
else if(item >=13 && item<=17){
    console.log("こんにちわ");
    
}