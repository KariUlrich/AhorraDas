
const botonBalance = document.querySelector(".botonBalance")
const botonCategorias = document.querySelector(".botonCategorias")
const botonReportes = document.querySelector(".botonReportes")
const divPrincipal = document.querySelector(".divPrincipal")
const categorias = document.querySelector(".categorias")
const reportes = document.querySelector(".reportes")

botonBalance.onclick = () => {
    divPrincipal.classList.remove("is-hidden")
    categorias.classList.add("is-hidden")
    reportes.classList.add("is-hidden")
    nuevaOperacion.classList.add("is-hidden")
}

botonCategorias.onclick = () => {
    divPrincipal.classList.add("is-hidden")
    categorias.classList.remove("is-hidden")
    reportes.classList.add("is-hidden")
    nuevaOperacion.classList.add("is-hidden")
}

botonReportes.onclick = () => {
    divPrincipal.classList.add("is-hidden")
    categorias.classList.add("is-hidden")
    reportes.classList.remove("is-hidden")
    nuevaOperacion.classList.add("is-hidden")
}

const botonNuevaOpe = document.querySelector(".botonNuevaOpe")
const nuevaOperacion = document.querySelector(".nuevaOperacion")

botonNuevaOpe.onclick = () => {
    nuevaOperacion.classList.remove("is-hidden")
    divPrincipal.classList.add("is-hidden")
}


