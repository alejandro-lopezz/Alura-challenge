//secciones
const sectiontextoEncriptado = document.getElementById("seccion-texto-encriptado")
const seccionInicial = document.getElementById("seccion-inicial")
//textarea
const textoAEncriptar = document.getElementById("texto-a-encriptar")
const textoEncriptado = document.getElementById("texto-a-desencriptar")
//matriz 
const letrasEncriptadas = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

sectiontextoEncriptado.style.display = "none"

//funcion llamada al hacer click en btn encriptar
function btEncriptar() {
    seccionInicial.style.display = "none"
    sectiontextoEncriptado.style.display = "flex"

    let texto = encriptar(textoAEncriptar.value) 
    textoEncriptado.value = texto
}

function btnDesencriptar() {
    let fraseAdesencriptar = desencriptar(textoEncriptado.value)
    textoEncriptado.value = fraseAdesencriptar   
}

function encriptar(frase) {

    for(let i = 0; i < letrasEncriptadas.length; i++) {
       if(frase.includes(letrasEncriptadas[i][0])) {
        frase = frase.replaceAll(
            letrasEncriptadas[i][0],
            letrasEncriptadas[i][1]
        )
       }
    }
    return frase
}

function desencriptar(fraseEncriptada) {

    for(let index = 0; index < letrasEncriptadas.length; index++) {
        if(fraseEncriptada.indexOf(letrasEncriptadas[index][1]) !== -1) {
            fraseEncriptada = fraseEncriptada.replaceAll(
            letrasEncriptadas[index][1],
            letrasEncriptadas[index][0]
         )
        }
     }
     return fraseEncriptada
}

function copiarTexto() {
    let textoACopiar =  document.getElementById("texto-a-desencriptar").value

    navigator.clipboard.writeText(textoACopiar)
}