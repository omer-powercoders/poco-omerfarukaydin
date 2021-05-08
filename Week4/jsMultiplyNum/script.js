/*  First Way



let number;

do{
    number = prompt("write a number")
}
while (number<0||number>10)
    
const result = 9 * number;
console.log(`${number} * 9=${result}`) */

//  Second Way

for(let number = 1; number <= 10; number++) {
    const result = 9 * number;
    console.log(`${number} * 9 = ${result}`);
}
