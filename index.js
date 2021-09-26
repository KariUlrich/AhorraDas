
const botonBalance = document.querySelector(".botonBalance")
const botonCategorias = document.querySelector(".botonCategorias")
const botonReportes = document.querySelector(".botonReportes")
const secPrincipal = document.querySelector(".secPrincipal")
const categorias = document.querySelector(".categorias")
const reportes = document.querySelector(".reportes")
const botonNuevaOpe = document.querySelector(".botonNuevaOpe")
const nuevaOperacion = document.querySelector(".nuevaOperacion")

botonBalance.onclick = () => {
    secPrincipal.classList.remove("is-hidden")
    categorias.classList.add("is-hidden")
    reportes.classList.add("is-hidden")
    nuevaOperacion.classList.add("is-hidden")
}

botonCategorias.onclick = () => {
    secPrincipal.classList.add("is-hidden")
    categorias.classList.remove("is-hidden")
    reportes.classList.add("is-hidden")
    nuevaOperacion.classList.add("is-hidden")
}

botonReportes.onclick = () => {
    secPrincipal.classList.add("is-hidden")
    categorias.classList.add("is-hidden")
    reportes.classList.remove("is-hidden")
    nuevaOperacion.classList.add("is-hidden")
}

botonNuevaOpe.onclick = () => {
    nuevaOperacion.classList.remove("is-hidden")
    secPrincipal.classList.add("is-hidden")
}

const divFiltros = document.querySelector(".divFiltros")
const botonOcultarFiltros = document.querySelector(".botonOcultarFiltros")

const ocultarFiltros = () => {
    if (botonOcultarFiltros.textContent === "Ocultar Filtros"){
        divFiltros.classList.add("is-hidden")
        botonOcultarFiltros.textContent = "Mostrar Filtros"
    }
    else{
        divFiltros.classList.remove("is-hidden")
        botonOcultarFiltros.textContent = "Ocultar Filtros"
    }
}

botonOcultarFiltros.onclick = ocultarFiltros


