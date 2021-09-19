
const botonBalance = document.querySelector(".botonBalance")
const botonCategorias = document.querySelector(".botonCategorias")
const botonReportes = document.querySelector(".botonReportes")
const divPrincipal = document.querySelector(".divPrincipal")
const categorias = document.querySelector(".categorias")
const reportes = document.querySelector(".reportes")

botonBalance.onclick = () => {
    divPrincipal.style.display = "flex"
    categorias.style.display = "none"
    reportes.style.display = "none"
}

botonCategorias.onclick = () => {
    divPrincipal.style.display = "none"
    categorias.style.display = "flex"
    reportes.style.display = "none"

}

botonReportes.onclick = () => {
    divPrincipal.style.display = "none"
    categorias.style.display = "none"
    reportes.style.display = "flex"

}

