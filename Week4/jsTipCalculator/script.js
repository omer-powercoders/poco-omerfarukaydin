let billAmount = 0;
let tip = 0;
let tipRate = 0;
let total = 0;

function tipCalc(tip, total){

billAmount = Number(prompt("What is the bill amount?"));
tipRate = Number(prompt("What is the tip rate?"));

tip = Math.round(billAmount * (tipRate/100))
total = billAmount + tip

alert("Tip : CHF" + tip);
alert("Total : CHF" + total);
}

tipCalc(tip, total);