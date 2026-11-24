// Classe Carro baseada na entidade apresentada na atividade.
class Carro {
    idCarro;
    nome;
    cor;
    disponivel;
    anoFabricacao;

    constructor(idCarro, nome, cor, disponivel, anoFabricacao) {
        this.idCarro = idCarro;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = disponivel;
        this.anoFabricacao = anoFabricacao;
    }
}

// Instancie três objetos diferentes usando new.
const carro1 = new Carro(1, "Civic", "Preto", true, 2022);
const carro2 = new Carro(2, "Corolla", "Prata", true, 2023);
const carro3 = new Carro(3, "Onix", "Branco", true, 2021);

// Mostre no console cada objeto criado.
console.log(carro1);
console.log(carro2);
console.log(carro3);

// Modifique dois valores e mostre os objetos atualizados.
carro1.cor = "Azul";
carro2.disponivel = false;

console.log(carro1);
console.log(carro2);
