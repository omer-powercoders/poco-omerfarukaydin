let author = prompt("Author name?");
let quote = "All animals are equal, but some animals are more equal than others. ";

function georgeOrwell() {
  
  if (author == "George Orwell") {

    alert(author + " says " + quote);
  } else {
    alert("I don't know...")
  }
}

georgeOrwell();