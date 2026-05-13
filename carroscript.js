class Carro {

    constructor(fabricante,modelo,ano,tipo,qtdPortas){
        this.fabricante = fabricante; // Propriedade da Classe
        this.modelo = modelo; // Propriedade da Classe
        this.ano = ano; // Propriedade da Classe
        this.tipo = tipo; // Propriedade da Classe
        this.qtdPortas = qtdPortas; // Propriedade da Classe
    }

    mostrarDadosDoCarro()
    {
        console.log(`${this.fabricante} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.qtdPortas} portas `)
    }

    mostrarModelo() {
        console.log("a marca do carro é", $,{this:modelo});
    }
}

const meuCarro = new Carro("Ford","KA","2008","Sedan",4);
meuCarro.mostrarDadosDoCarro();