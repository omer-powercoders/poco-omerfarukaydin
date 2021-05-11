let currentGradient = document.getElementById("currentgradient")
let colorPicker1 = document.getElementById("colorpicker1")
let colorPicker2 = document.getElementById("colorpicker2")
let color2 = "rgb(74,255,74)"
let color1 = "rgb(255,0,0)"
let gradient = `linear-gradient(to left, ${color2}, ${color1} ) repeat scroll 0% 0%`;

document.body.style.background = gradient

//Set the value we use in Background in h3 tag with id "currentgradient"
currentGradient.innerText = gradient

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
 }

colorPicker1.value = rgbToHex(255,0,0);
colorPicker2.value = rgbToHex(74,255,74);

colorPicker1.addEventListener("change", function(){
    color1 = hexToRGB(this.value);   
    color2 = hexToRGB(colorPicker2.value)
    gradient = `linear-gradient(to left, ${color2}, ${color1} ) repeat scroll 0% 0%`;
    document.body.style.background = gradient
    currentGradient.innerText = gradient
})

colorPicker2.addEventListener("change", function(){
    color1 = hexToRGB(colorPicker1.value); 
    color2 = hexToRGB(this.value);    
    gradient = `linear-gradient(to left, ${color2}, ${color1} ) repeat scroll 0% 0%`;
    document.body.style.background = gradient
    currentGradient.innerText = gradient
})