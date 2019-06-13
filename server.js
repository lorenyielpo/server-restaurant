const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const controller = require("./ComidasController")



const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get("/comidas", (request, response) => {
    controller.getAll()
        .then(resultado => response.send(resultado))
})

servidor.get("/comidas/:id", (request, response)=>{
    const id = request.params.id
    controller.getAll(id)
        .then(resultado => {
            if(!comida){
                response.send(404)
            }else{
                response.send(resultado)
            }
        })
        .catch(error =>{
            if(error.name === "CastError"){
                response.send(400)
            } else {
                response.send(500)
            }
        })
    
})

servidor.post("/comidas", (request, response) => {
    
    response.send(controller.add(request.body))
})

servidor.delete("/comidas/:id", async(request, response) => {
    controller.remove(request.params.id)
        .then(comida => response.send(204)
    )
})

// servidor.put("/comidas/:id", (request, response) => {
//     const sucess = controller.change(request.params.id, request.body)
//     if (sucess) {
//         response.send(204)
//     } else {
//         response.send(404)
//     }
// })

servidor.patch("/comidas/:id", (request, response) => {
    const id = request.params.id
    controller.update(id, request.body)
        .then(comida =>{
            if(!comida){
                response.send(404)
            }else{
               response.send(comida) 
            }
        })
})

servidor.listen(3000)
console.log("servidor rodando na porta 3000")