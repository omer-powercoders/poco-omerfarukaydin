function calculateTip() {
  let billAmount = document.getElementById("billAmount").value;
  let billPercent = document.getElementById("billPercent").value;

  if (billAmount === "" || billPercent == 0) {
    alert("Write something!!!");
    return;
  }
  let tip = (billAmount * (billPercent/100));
  document.getElementById("modtext").innerText = "Total: "   +(Number(billAmount) + tip) + " Fr. You are very generous :)";
  
}

let modal = document.getElementById("modalText");
let btn = document.getElementById("calculate");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  calculateTip();
  modal.style.display = "block";

}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
 
}