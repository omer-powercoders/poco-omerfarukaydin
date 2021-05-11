function arabicToRoman(arabicNumber) {

    //We set a limit so no bigger than 3000
    const limit = 3000;

    //If the number is greater than limit or is not a number then return message and exit
    if (arabicNumber > limit || isNaN(arabicNumber)) {
        return "please enter a number up to 3000";
    } else {
        //If the number is valid then get the length of it
        let numberLength = arabicNumber.length;
        let romanNumber = "";
        
        //Declare roman numbers as arrays
        //We will match the position of roman number from the number value (minus 1) in the number position 
        let unit = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        let tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        let hunreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        let thousands = ["M", "MM", "MMM"];

        //We do not use break since we need to go from at least thousands to unit and build the roman number
        switch (numberLength) {
            case 4: //thousand
                romanNumber = thousands[arabicNumber[numberLength - 4] - 1];
            case 3: //hundred
                romanNumber = romanNumber + hunreds[arabicNumber[numberLength - 3] - 1];
            case 2: //tenth
                romanNumber = romanNumber + tens[arabicNumber[numberLength -2] - 1];
            default: //unit
                romanNumber = romanNumber + unit[arabicNumber[numberLength - 1] - 1];
        }
        //lets remove the undefined text...
        return romanNumber.split("undefined").join("") ;
        //return romanNumber ;
    }
}

//console.log(arabicToRoman(Prompt("Enter an arabic number (up to 3000)")));
console.log(arabicToRoman("2123"));

/*arabicNumber = "3000" 
0: 3
1: 0
2: 0
3: 0
length 4

romanNumber = thousand[arabicNumber[0] - 1]
romanNumber = thousand[3 - 1]
romanNumber = thousand[2]
*/
