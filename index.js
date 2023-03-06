
let bodyPage = document.getElementById("body")
let para = document.getElementById("para")
let title = document.getElementById("title")

if(bodyPage == null) {
    console.log("BodyPage is NULL")
}

bodyPage.addEventListener("load", bodyOnLoad)

let bodyOnLoad = function() {
    para.innerText = "Shifty Home"
    title.innerText = "Shifty Website"
}
