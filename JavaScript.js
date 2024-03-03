



const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")

function botao () {

form.style.left = "50%"
form.style.transform = "translateX(-50%)"
mascara.style.visibility = "visible"


}



function cliquei () {
form.style.left = "-300px"
mascara.style.visibility = "hidden"
form.style.transform = "translateX(0)"


}



