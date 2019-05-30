const http = require("http")

const comidas = {
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
    }
    ]
}

const servidor = http.createServer(function (request, response) {
    if (request.url === "/") {
        response.end("Hello world!")
    } else if (request.url === "/comidas") {
        if (request.method === "GET") {
            response.writeHead(200, {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            })
            response.write(JSON.stringify(comidas))
            response.end()
        } else if (request.method === "POST") {
            response.writeHead(201, {
                "Content-Type": "application/json"
            })
            response.end("<h1>Resposta do POST</h1>")
        }
    }
})

servidor.listen(3000)
console.log("servidor rodando na porta 3000")