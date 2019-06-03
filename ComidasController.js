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

const change = (id, conteudo) => {
    let prato = getAll().comidas
    prato.filter((comida)=>{
        if(comida.id == id){
            let nome = () => {comida.nome = conteudo.nome}
            let descricao = () => {comida.descricao = conteudo.descricao}
            let imagem = () => {comida.imagem = conteudo.imagem}
            return nome(), descricao(), imagem()
        }
    })
}


module.exports = {
    getAll, 
    add,
    remove,
    change
}