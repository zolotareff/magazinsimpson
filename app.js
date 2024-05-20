const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "auto"
})
    connection.connect()
   

//Select
//module.exports = function select(d) {
const selecionar = function selected(d) {    
let sql = "select * from carro where id = ?"
let id = d
connection.query(sql, id, function(error, results, fields){
   
    if(error) throw error 
    let carros = results
    for(let i = 0; carros.length > i;i++){
        console.log(carros[i].id + ":" + carros[i].marca)
        return
    }   
    
})
     connection.end()
}

//Select Marca
    const selecionarMarca = function selectedNome(d) {    
        let sql = "select * from carro where marca = ?"
        let marca = d
        connection.query(sql, marca, function(error, results, fields){
           
            if(error) throw error 
            let carros = results
            for(let i = 0; carros.length > i;i++){
                console.log(carros[i].marca)
                return
            }   
            
        })
             connection.end()
        }

//Insert
const inserir = function insert(marca,ano){
let sql = "insert into carro set ?"
let dados = {marca:marca,ano:ano}
connection.query(sql, dados, function(error, results, fields){
    if(error) throw error
    console.log("Salvo" + results.insertId)
})
    connection.end()
}

//Atualizer
const atualizar = function update(cod,marca,ano){
let sql = "update carro set ? where id = ?"
let dados = {id:cod,marca:marca,ano:ano}
let id = dados.id
connection.query(sql,[dados,id], function(error,results,fields){
    if(error) throw error
    console.log("Atualizado: " + results.affectedRows)
})
    connection.end()
}

//Apagar
const apagar = function del(cod){
let sql = "delete from carro where id = ?"
let id = cod
connection.query(sql,id, function(error,results,fields){
    if(error) throw error
    console.log("Apadado com sucesso")
})
    connection.end()
}

exports.selecionar = selecionar
exports.selecionarMarca = selecionarMarca
exports.inserir = inserir
exports.atualizar = atualizar
exports.apagar = apagar
