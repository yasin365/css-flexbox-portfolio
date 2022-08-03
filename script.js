document.querySelector(".nav__icon").addEventListener("click", showLinks);

function showLinks(){
  document.querySelector(".nav__links").classList.toggle("showlinks");
}