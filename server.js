const express = require("express")
const cors = require("cors")
const controller = require("./ComidasController")


const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request, response)=>{
    response.send(controller.getAll())
})

servidor.listen(3000)
console.log("servidor rodando na porta 3000")