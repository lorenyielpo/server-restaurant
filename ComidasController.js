const repository = require("./ComidasRepository")

const getAll = () => {
    return repository.pratosFavs.comidas
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().push(comida)
}

const remove = (id) => {
    getAll() = getAll().filter((comida) => {
        return comida.id !== id
    })
}

const change = (id, conteudo) => {
    let prato = getAll()
    prato.find((comida) => {
        return comida.id === id
    })
    if (prato.id === undefined) {
        return false
    }
    
    prato.nome = conteudo.nome
    prato.descricao = conteudo.descricao
    prato.imagem = conteudo.imagem

    return true
}

const update = (id, comida) => {
    let comidaId = getAll().find(comida => {
        return comida.id === id
    })

    if (comida.id === undefined) {
        return false
    }

    if (comida.nome !== undefined) {
        comidaId.nome = comida.nome
    }
    if (comida.descricao !== undefined) {
        comidaId.descricao = comida.descricao
    }
    if (comida.imagem !== undefined) {
        comidaId.imagem = comida.imagem
    }

    return true
}


module.exports = {
    getAll,
    add,
    remove,
    change,
    update
}