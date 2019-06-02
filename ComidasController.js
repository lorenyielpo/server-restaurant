const repository = require("./ComidasRepository")

const getAll = () => {
 return repository.pratosFavs
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().comidas.push(comida)
}

const remove = (id) => {
    getAll().comidas = getAll().comidas.filter((comida)=>{
        return comida.id !== id
    })
}

const change = (item) => {
    getAll().comidas = getAll().comidas.filter((comida)=>{
        return comida.imagem = item
    })
}


module.exports = {
    getAll, 
    add,
    remove,
    change
}