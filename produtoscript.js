class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhes() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

const produto1 = new Produto("Cadeira Gamer", 899.99);
produto1.mostrarDetalhes();

console.log("---");

class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco);
        this.garantia = garantia;
    }

    mostrarDetalhes() {
        super.mostrarDetalhes(); // aproveita o método do pai
        console.log(`Garantia: ${this.garantia} meses`);
    }
}

const eletronico1 = new Eletronico("Notebook", 3500.00, 12);
eletronico1.mostrarDetalhes();