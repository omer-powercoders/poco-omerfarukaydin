function greaterNum(number_1, number_2) {
  
if (number_1 > number_2) {
  alert("The grater number of " + number_1 + " and " + number_2 + " is " + number_1)
}
if (number_1 < number_2) {
  alert("The grater number of " + number_1 + " and " + number_2 + " is " + number_2)
}
if (number_1 < number_2) {
  alert("The smaller number of " + number_1 + " and " + number_2 + " is " + number_1)
}
if (number_1 > number_2) {
  alert("The smaller number of " + number_1 + " and " + number_2 + " is " + number_2)
}
if (number_1 == number_2) {
  alert("The numbers are equal.")
}
}
let number_1 = Number(prompt("Please enter the first number"));
let number_2 = Number(prompt("Please enter the second number"));
greaterNum(number_1, number_2);
