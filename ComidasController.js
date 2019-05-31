const pratosFavs = {
    comidas: [{
        nome: "Batata frita",
        descricao: "melhor batata frita",
        imagem: "https://img.estadao.com.br/fotos/crop/600x400/resources/jpg/2/1/1487193579312.jpg"
    },
    {
        nome: "Falafel",
        descricao: "muito falafel",
        imagem: "https://www.recipetineats.com/wp-content/uploads/2018/09/Falafel_4.jpg"
    },
    {
        nome: "caldo de mandioquinha",
        descricao: "melhor caldo",
        imagem: "https://portal-amb-imgs.clubedaana.com.br/2018/11/caldo-de-mandioquinha.jpg"
    },
    {
        nome: "Feijoada vegana",
        descricao: "melhor feijoada",
        imagem: "https://veganapratica.com/wp-content/uploads/2018/06/IMG_2621-copy.jpg"
    },
    {
        nome: "Pizza de brocólis",
        descricao: "melhor pizza ",
        imagem: "https://media-cdn.tripadvisor.com/media/photo-s/0f/13/d4/e3/pizza-de-brocolis.jpg"
    },
    {
        nome: "Pão de queijo",
        descricao: "mineirim",
        imagem: "https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/1543943903839-pa%CC%83o%20de%20queijo.jpg"
    },
    {
        nome: "Shwarma de falafel",
        descricao: "comida árabe é a melhor",
        imagem: "https://media-cdn.tripadvisor.com/media/photo-s/12/9d/d5/ef/shawarma-de-falafel.jpg"
    }
    ]
}

const getAll = () => {
 return pratosFavs
}

module.exports = {
    getAll
}