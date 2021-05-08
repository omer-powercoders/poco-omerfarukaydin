
function myFunction() {
  let x = document.getElementById("passw");
  if (x.value == "123") {
    window.location.href = "second.html";

  } else {
    alert("Hey, your password is not correct!!!");
  }

}

let toDoListArray = []

//assign to a variable the input box
let inputValue = document.getElementById("addList");

function newElement() {




  if (inputValue.value.trim() == '') {
    alert("Please, wake up and make something!!!");
  }
  else {
    //add the input text value to the array
    toDoListArray.push(inputValue.value);

    //sort alphabetically the array elements
    toDoListArray.sort();

    //get the UL object to a variable
    let ulList = document.getElementById("list");


    //Clear the list (only li elements) by emptying the UL list
    ulList.innerHTML = ""
    //Loop the array and add li elements again, the are already sorted!
    for (let i = 0; i < toDoListArray.length; i++) {
      let li = document.createElement("li");
      li.innerText = toDoListArray[i];
      ulList.appendChild(li);
    }
  }

  document.getElementById("addList").value = "";
  inputValue.value = "";
  inputValue.focus();
}

function removeAll() {
  toDoListArray = [];
  var lst = document.getElementsByTagName("ul");
  lst[0].innerHTML = "";
  inputValue.value = "";
  inputValue.focus();
}


