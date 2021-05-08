let choice = ['London', 'Berlin', 'Moskow', 'Paris'];
for (let i = 0; i < choice.length; i++) {
  alert('My #' + (i + 1) + ' choice is ' + choice[i]);
}

for (let i = 0; i < choice.length; i++) {
  let choiceNumber = i + 1;
  let choiceFeatures;
  if (choiceNumber == 1) {
    choise = 'London';
    choiceFeatures = 'England';
  } else if (choiceNumber == 2) {
    choise = 'Berlin';
    choiceFeatures = 'Germany';
  }else if (choiceNumber == 3) {
    choise = 'Moskow';
    choiceFeatures = 'Russia';
  }else if  (choiceNumber == 4){
    choise = 'Paris';
    choiceFeatures  = 'France';
  }
    alert(choice[i]+ " is capital of the " + choiceFeatures + "." );
}