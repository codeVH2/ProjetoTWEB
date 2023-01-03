const hamburger = document.querySelector(".hamburger");
const lista = document.getElementById("listbottom");
const principal = document.getElementById("principal");
const btn = document.getElementById("btn-menu");

hamburger.addEventListener("click", () => {
    lista.classList.toggle("active");
    principal.classList.toggle("active2");

})


btn.addEventListener("click", () => {
    lista.classList.toggle("active");
    principal.classList.toggle("active2");

})