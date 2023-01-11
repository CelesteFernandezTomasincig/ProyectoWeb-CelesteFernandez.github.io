
// 

let countries = ["Argentina", "Bolivia", "Chile", "Uruguay", "Estados Unidos", "Mexico", "otro"];
let selectPaises = document.getElementById("paises");
for (const unPais of countries) {
    let option = document.createElement("option");
    option.innerHTML = unPais;
    selectPaises.appendChild(option);
}

 //Input 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let numero = document.getElementById("numero");
let mail = document.getElementById("mail");
let texto = document.getElementById("texto");


//Summary
let nombreSummary = document.getElementById("nombreSummary");
let apellidoSummary = document.getElementById("apellidoSummary");
let numeroSummary = document.getElementById("numeroSummary");
let mailSummary = document.getElementById("mailSummary");
let textoSummary = document.getElementById("textoSummary");


nombre.addEventListener("change", (event) => {
    console.log("--> Evento change en el input nombre. ", event.target.value);
    nombreSummary.innerHTML = event.target.value;
})
apellido.addEventListener("change", (event) => {
    console.log("--> Evento change en el input apellido. ", event.target.value);
    apellidoSummary.innerHTML = event.target.value;
})
numero.addEventListener("change", (event) => {
    console.log("--> Evento change en el input numero. ", event.target.value);
    numeroSummary.innerHTML = event.target.value;
})
mail.addEventListener("change", (event) => {
    console.log("--> Evento change en el input mail. ", event.target.value);
    mailSummary.innerHTML = event.target.value;
})
texto.addEventListener("change", (event) => {
    console.log("--> Evento change en el input texto. ", event.target.value);
})



