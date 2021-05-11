


let romNum = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],         // Ones
["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]];        // Hundreds

function roman(num) {
  let numbers = "";
  for (let i = 0; i < numbers.lenght; i++) {
    numbers = romNum[i]
  }

  return numbers;


}


