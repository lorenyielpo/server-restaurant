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

    controller.getAll(request.params.id)

        .then(resultado => {
            if(!resultado){
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
    
    controller.add(request.body)

    .then(resultado => {
        if(!resultado.nome){
            response.send(404)
        }else{
            response.send(resultado._id)
        }
    })
    .catch(error =>{
        if(error.name === "ValidationError"){
            response.send(400)
        } else {
            response.send(500)
        }
    })
})

servidor.delete("/comidas/:id", (request, response) => {

    controller.remove(request.params.id)

        .then(resultado => {
            if(!resultado){
                response.send(404)
            }else{
                response.send(204)
            }
        })
        .catch(error =>{
            response.send(500)
        })
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
    controller.update(request.params.id, request.body)
        .then(resultado =>{
            if(!resultado){
                response.send(404)
            }else{
               response.send(resultado) 
            }
        })
})

servidor.listen(3000)
console.log("servidor rodando na porta 3000")