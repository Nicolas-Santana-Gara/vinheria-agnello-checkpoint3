// Array de objetos representando os vinhos da vinícola
const vinhos = [
    {
        nome: "Cabernet Sauvignon Reserva",
        tipo: "tinto",
        safra: 2018,
        estoque: 12
    },
    {
        nome: "Chardonnay Premium",
        tipo: "branco",
        safra: 2020,
        estoque: 8
    },
    {
        nome: "Merlot Clássico",
        tipo: "tinto",
        safra: 2019,
        estoque: 4
    },
    {
        nome: "Sauvignon Blanc",
        tipo: "branco",
        safra: 2021,
        estoque: 15
    },
    {
        nome: "Rosé Provence",
        tipo: "rosé",
        safra: 2022,
        estoque: 3
    }
];

// Função para adicionar novos vinhos ao array
function adicionarVinho(nome, tipo, safra, estoque) {
    const novoVinho = {
        nome,
        tipo,
        safra,
        estoque
    };

    vinhos.push(novoVinho);
    console.log(`Vinho "${nome}" adicionado com sucesso!`);
    return novoVinho;
}

// Função para listar todos os vinhos usando forEach
function listarVinhos() {
    console.log("=== LISTA COMPLETA DE VINHOS ===");
    
    vinhos.forEach((vinho, index) => {
        console.log(`${index + 1}. ${vinho.nome} (${vinho.tipo}, ${vinho.safra}) - Estoque: ${vinho.estoque} unidades`);
    });
    
    return vinhos;
}

// Função para mostrar vinhos com estoque baixo usando filter
function vinhosEstoqueBaixo(limite = 5) {
    const baixoEstoque = vinhos.filter(vinho => vinho.estoque < limite);
    
    console.log(`=== VINHOS COM ESTOQUE ABAIXO DE ${limite} ===`);
    
    if (baixoEstoque.length === 0) {
        console.log("Não há vinhos com estoque baixo.");
    } else {
        baixoEstoque.forEach((vinho, index) => {
            console.log(`${index + 1}. ${vinho.nome} - Estoque: ${vinho.estoque} unidades`);
        });
    }
    
    return baixoEstoque;
}

// Função para calcular estoque total com reduce
function calcularEstoqueTotal() {
    const estoqueTotal = vinhos.reduce((total, vinho) => total + vinho.estoque, 0);
    
    console.log(`=== ESTOQUE TOTAL DA VINÍCOLA ===`);
    console.log(`Total: ${estoqueTotal} unidades`);
    
    return estoqueTotal;
}

// Função para exibir nomes dos vinhos em caixa alta com map
function nomesEmCaixaAlta() {
    const nomesCaixaAlta = vinhos.map(vinho => vinho.nome.toUpperCase());
    
    console.log(`=== NOMES DOS VINHOS EM CAIXA ALTA ===`);
    nomesCaixaAlta.forEach((nome, index) => {
        console.log(`${index + 1}. ${nome}`);
    });
    
    return nomesCaixaAlta;
}

// Exemplo de adição de um novo vinho
adicionarVinho("Pinot Noir Especial", "tinto", 2017, 6);

// Exibir todas as informações solicitadas
listarVinhos();
vinhosEstoqueBaixo();
calcularEstoqueTotal();
nomesEmCaixaAlta();

// Exibir um alerta com um resumo
alert(
    "Sistema de Gerenciamento de Vinhos - Vinheria Agnello\n\n" +
    `Total de vinhos cadastrados: ${vinhos.length}\n` +
    `Vinhos com estoque baixo: ${vinhosEstoqueBaixo().length}\n` +
    `Estoque total: ${calcularEstoqueTotal()} unidades\n\n` +
    "Consulte o console para ver detalhes completos."
);