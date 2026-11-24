# Aula 01 — Criando Classes

Projeto JavaScript para abrir no Visual Studio Code e publicar no GitHub.

## Estrutura

```text
Aula01-Criando-Classes/
├── src/
│   └── models/
│       ├── produto.js
│       ├── Usuario.js
│       └── carro.js
├── package.json
└── README.md
```

## Como executar

É necessário ter Node.js instalado. Abra a pasta do projeto no VS Code e use o terminal integrado.

Execute cada demonstração separadamente:

```bash
node src/models/produto.js
node src/models/Usuario.js
node src/models/carro.js
```

Ou use os scripts:

```bash
npm run produto
npm run usuario
npm run carro
npm run aula
```

## Conteúdo

- `produto.js`: classe `Produto` com `id`, `nome` e `ativo`, construtor, criação de dois objetos e alteração de propriedades, seguindo a demonstração da primeira videoaula.
- `Usuario.js`: enum `Genero` com `M`, `F` e `OUTRO`, classe `Usuario`, construtor, conversão da data com `new Date()`, `isAdmin` inicializado como `false`, método `perfil()` e os dois exemplos de usuários mostrados na videoaula.
- `carro.js`: implementação do exercício proposto no slide “Com base na Entidade do Carro”: atributos `idCarro`, `nome`, `cor`, `disponivel` e `anoFabricacao`, três instâncias e alteração de duas propriedades.

**Observação:** o vídeo apresenta o enunciado do exercício `Carro`; a implementação desse arquivo foi feita a partir dos atributos e passos exibidos no slide.
