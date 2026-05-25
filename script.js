// Banco de dados do site (simulando informações históricas)
const dadosHistoricos = {
    egito: {
        titulo: "Egito Antigo",
        texto: "Florescendo às margens do Rio Nilo, o Egito Antigo foi uma das civilizações mais fascinantes da história. Famosos por suas pirâmides monumentais, faraós e hieróglifos, os egípcios desenvolveram avanços incríveis na medicina, astronomia e engenharia que ecoam até os dias de hoje.",
        curiosidade: "<strong>Curiosidade:</strong> As pirâmides não foram construídas por escravos, mas sim por trabalhadores assalariados que respeitavam profundamente o Faraó."
    },
    grecia: {
        titulo: "Grécia Antiga",
        texto: "Berço da democracia, da filosofia ocidental e dos Jogos Olímpicos, a Grécia Antiga moldou o pensamento do mundo moderno. Cidades-Estado como Atenas e Esparta mostravam lados diferentes de uma cultura rica em mitologia, teatro, artes e estratégias militares.",
        curiosidade: "<strong>Curiosidade:</strong> A palavra 'idiota' surgiu na Grécia Antiga (idiōtēs) e era usada para descrever qualquer cidadão que não participava da vida política da cidade."
    },
    roma: {
        titulo: "Império Romano",
        texto: "De uma pequena vila na Itália a um dos maiores impérios que o mundo já viu. Roma dominou o Mediterrâneo com suas legiões disciplinadas, estradas duradouras e um sistema de leis complexo. Seu legado arquitetônico, como o Coliseu e os aquedutos, ainda impressiona.",
        curiosidade: "<strong>Curiosidade:</strong> Os romanos usavam urina como enxaguante bucal e para lavar roupas, por conta da alta concentração de amônia, que servia como alvejante!"
    }
};

// Função para mudar o conteúdo dinamicamente
function mudarConteudo(civilizacao) {
    // 1. Atualizar o texto na tela
    document.getElementById('titulo-civilizacao').innerText = dadosHistoricos[civilizacao].titulo;
    document.getElementById('texto-civilizacao').innerText = dadosHistoricos[civilizacao].texto;
    document.getElementById('curiosidade-civilizacao').innerHTML = dadosHistoricos[civilizacao].curiosidade;

    // 2. Atualizar a classe 'active' nos botões
    const botoes = document.querySelectorAll('.aba-btn');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // Adiciona o efeito ativo ao botão que foi clicado
    event.currentTarget.classList.add('active');
}