/**
 * Nicolas Figueroa - 201813086
 */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
let productos = {
    1:{id: Date.now(),
    nombre: 'Pan',
    precio: 1000,
    estado: false},
    2:{id: Date.now(),
    nombre: 'Galletas',
    precio: 1000,
    estado: false},
    3:{id: Date.now(),
    nombre: 'Leche',
    precio: 1000,
    estado: false},
    
}

app.set('port', 5000)

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

app.get('/client.js', function(req, res){
    res.sendFile(__dirname+'/client.js')
})

app.post('/', function(req, res){
    const producto = {
        id: Date.now(),
        nombre: req.body.nombre,
        precio: req.body.valor,
        estado: false
    }
    productos[producto.id] = producto
    res.send(productos)
})


app.listen(app.get('port'), function(){
    console.log( 'Express se ha iniciado en http://localhost:' +
      app.get('port') + '; presione Ctrl-C para cerrar el servidor.' )
})