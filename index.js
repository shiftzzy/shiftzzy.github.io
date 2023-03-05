
let bodyPage = document.getElementById("body")
let para = document.getElementById("para")
let title = document.getElementById("title")

bodyPage.addEventListener("load", bodyOnLoad)

function bodyOnLoad() {
    para.innerText = "Shifty Home"
    title.innerText = "Shifty Website"
}