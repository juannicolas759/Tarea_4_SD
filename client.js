const formulario = document.getElementById('formulario')
const listaProductos = document.getElementById('lista-productos')
const inputPrecio = document.getElementById('precio')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let productos = {}

function getQuote(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp.responseText)
            console.log(data)
        }
    };
    xhttp.open("POST", "/Server.js", true);
    xhttp.send();
}





