const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const controller = require("./ComidasController")



const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get("/comidas", async(request, response) => {
    controller.getAll()
        .then(resultado => response.send(resultado))
})

servidor.post("/comidas", (request, response) => {
    controller.add(request.body)
    response.send(201)
})

servidor.get("/comidas/:id", async(request, response)=>{
    const id = request.params.id
    controller.getAll(id)
    .then(resultado => response.send(resultado))
    
})

servidor.delete("/comidas/:id", (request, response) => {
    controller.remove(request.params.id)
    response.send(204)
})

servidor.put("/comidas/:id", (request, response) => {
    const sucess = controller.change(request.params.id, request.body)
    if (sucess) {
        response.send(204)
    } else {
        response.send(404)
    }
})

servidor.patch("/comidas/:id", (request, response) => {
    const sucess = controller.update(request.params.id, request.body)
    if (sucess) {
        response.send(204)
    } else {
        response.send(404)
    }
})

servidor.listen(3000)
console.log("servidor rodando na porta 3000")