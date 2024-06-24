document.addEventListener("DOMContentLoaded", function() {
    navegacionFija()
    crearGaleria()
    scrollNav()
})

const cantidad_imagenes = 16

//Funcion para hacer que se marque en que seccion de la navegacion estas
function navegacionFija() {
    const header = document.querySelector(".header")
    const sobreFestival = document.querySelector(".sobre-festival")

    //getBounding marca unas cordenadas y con ello podemos marcar que si has pasado algun punto 
    //de la pagina pase algo
    document.addEventListener("scroll", function () {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add("fixed")
        } else {
            header.classList.remove("fixed")
        }
    })
}
function crearGaleria () {
    const galeria = document.querySelector(".galeria-imagenes")
    for (let i = 1; i <=cantidad_imagenes; i++) {
        const imagen = document.createElement("IMG")
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = "Imagen Galería"
        
        //Event Handler
        imagen.onclick = function () {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}


function mostrarImagen(i) {

    //Muestra imagen en grande cuando pinchas en la imagen
    const imagen = document.createElement("IMG")
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = "Imagen Galería"
    
    // Generar modal
    const modal = document.createElement("DIV")
    modal.classList.add("modal")
    modal.onclick = cerrarModal
    //Añade la imagen en grande
    modal.appendChild(imagen)

    // Agregar al HTML
    const body = document.querySelector("body")
    body.classList.add("overflow-hidden")
    body.appendChild(modal)
}

function cerrarModal () {
    const modal = document.querySelector(".modal")

    modal?.remove()

    const body = document.querySelector("body")
    body.classList.remove("overflow-hidden")
}

function scrollNav () {
    const navLinks = document.querySelectorAll(".navegacion-principal a")

    navLinks.forEach( link => {
        link.addEventListener("click", e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute("href")
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: "smooth"})
        })
    })
}