const repository = require("./ComidasRepository")

const getAll = () => {
 return repository
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().comidas.push(comida)
}

const remove = (id) => {
    getAll().comidas = pratosRestantes.comidas.filter((comida)=>{
        return comida.id !== id
    })

}


module.exports = {
    getAll, 
    add,
    remove
}