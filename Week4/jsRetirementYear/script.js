function retYear(retirementAge, currentAge) {
  if (retirementAge < currentAge) {

    console.log("Your retirement age must be greater or equal to your current age");
  } else {
    let retirementYear = retirementAge - currentAge;
    let currentYear = new Date().getFullYear();
    let retirementYears = currentYear + retirementYear;
    let templateText =
      `You have ` + retirementYear + "years left until you can retire. It's " + currentYear + ", so you can retire in " + retirementYears + ".";

    alert(templateText);
  }
}
let currentAge = Number(prompt("Enter your age: "));
let retirementAge = Number(prompt("Enter your desired retirement age: "));

retYear(retirementAge, currentAge);