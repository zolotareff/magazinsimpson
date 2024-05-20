const express = require('express')
const app = express()
const CarroDB = require('./app')


app.get('/carros', function(req,res){
    res.type("carros.html")
})

app.get('/carros/:id', function(req,res){
    let cod = req.params.id
    const ma = CarroDB.selecionar(cod)
    res.json(ma)
})

app.get('/carros/:teste', function(req,res){
   // let a = req.params.marca
    const m = CarroDB.selecionarMarca("fiat")
    res.json(m)
})

app.get('/carros/:marca/:ano', function(req,res){
     let marca = req.params.marca
     let ano = req.params.ano
     const m = CarroDB.inserir(marca,ano)
     res.json(m)
 })

//Iniciar servidor
let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})