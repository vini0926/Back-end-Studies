const produtos = [
    { id: 1, nome: "camiseta", preco: 25.99},
    { id: 2, nome: "calça", preco: 39.99},
    { id: 3, nome: "tenis", preco: 299.90},
];

const produtosJson = JSON.stringify(produtos)
console.log(produtos)
console.log(produtosJson)

const produtosObj = JSON.parse(produtosJson);
console.log(produtosObj);


// tarefa

function carregarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produto = {
                id: id,
                nome: "Notebook",
                preco: 3500.00
            };
            resolve(produto);
        }, 2000);
    });
}

carregarProduto(1)
    .then(produto => {
        const json = JSON.stringify(produto);
        console.log("JSON:", json);

        const objeto = JSON.parse(json);
        console.log("Objeto:", objeto);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });

async function carregarProdutoAsync(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produto = {
                id: id,
                nome: "Notebook",
                preco: 3500.00
            };
            resolve(produto);
        }, 2000);
    });
}

async function main() {
    try {
        const produto = await carregarProdutoAsync(1);

        const json = JSON.stringify(produto);
        console.log("JSON:", json);

        const objeto = JSON.parse(json);
        console.log("Objeto:", objeto);

    } catch (erro) {
        console.log("Erro:", erro);
    }
}

main();