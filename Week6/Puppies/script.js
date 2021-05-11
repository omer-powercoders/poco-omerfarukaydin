let getPuppy = document.getElementById("getpuppy")
let puppiesphotos = document.getElementById("puppiesphotos")

getPuppy.addEventListener("click", function() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
            let img = document.createElement("img");
            img.src = data.message
            puppiesphotos.appendChild(img);

        });
    
        
});

let something = function(){
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
        let img = document.createElement("img");
        img.src = data.message
        puppiesphotos.appendChild(img);

    });
    return "";
}

Promise.all(something(), something(), something())