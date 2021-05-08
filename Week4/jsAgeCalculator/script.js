let birthYear = Number(prompt("enter your birth year"));
let futureYear = Number(prompt("enter the future year"));

function futureAge(birthY, futureY) {
  return futureY - birthY;
}
alert("You will be " + futureAge(birthYear, futureYear));