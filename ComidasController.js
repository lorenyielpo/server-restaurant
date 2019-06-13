const repository = require("./ComidasRepository")
const comidasModel = require("./ComidasSchema")

repository.connect()

const getAll = async () => {
    return comidasModel.find((error, comidas) => {
        return comidas
    })
}

const getById = async (id) => {
    return comidasModel.findById(id)
}


const add = (comida) => {
    const comidaNova = new comidasModel({nome: comida.nome, descricao: comida.descricao, imagem: comida.imagem})
    return comidaNova.save()
}

const remove = async (id) => {
    return comidasModel.findByIdAndDelete(id)
}

// const change = (id, conteudo) => {
//     let prato = getAll()
//     prato.find((comida) => {
//         return comida.id === id
//     })
//     if (prato.id === undefined) {
//         return false
//     }
    
//     prato.nome = conteudo.nome
//     prato.descricao = conteudo.descricao
//     prato.imagem = conteudo.imagem

//     return true
// }

const update = (id, comida) => {
    return comidasModel.findByIdAndUpdate(id,
        {$set: comida},
        {new: true},
        )
}


module.exports = {
    getAll,
    getById,
    add,
    remove,
    // change,
    update
}