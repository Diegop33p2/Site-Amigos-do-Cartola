  // Pega os elementos do HTML
        const modal = document.getElementById('modal-imagem');
        const imagemAmpliada = document.getElementById('imagem-ampliada');
        const avatares = document.querySelectorAll('.avatar');

        // Adiciona um evento de clique para CADA foto (avatar)
        avatares.forEach(foto => {
            foto.addEventListener('click', function() {
                // Pega a URL da foto clicada e joga na imagem grande do modal
                imagemAmpliada.src = this.src;
                // Adiciona a classe 'ativo' para o modal aparecer na tela
                modal.classList.add('ativo');
            });
        });

        // Adiciona um evento de clique no próprio modal para fechar
        modal.addEventListener('click', function(evento) {
            // Se clicar em qualquer lugar que seja o fundo do modal ou na foto, remove a classe 'ativo'
            modal.classList.remove('ativo');
        });
        /* === 1. GERADOR DE DESCULPAS === */
const desculpas = [
    "O juiz roubou meu capitão e tirou o saldo de gol.",
    "Pensei em colocar o jogador A, pensei em colocar o jogador B também",
    "O aplicativo do Cartola bugou bem na hora que eu ia salvar o time.",
    "Escalei confiando na zaga do Vasco. Fui mlk.",
    "Esqueci que o jogo era sábado à tarde, ficou o time da rodada passada.",
    "O meu 9 perdeu 3 gols na cara, era pra eu ter feito 100 pontos hoje.",
    "Priorizei o campeonato de Galo, o Cartola tá em segundo plano.",
    "Meu goleiro tomou frango de propósito pra me derrubar.",
    "Seu eu não 'tinvesse' mudado o time",
    "Fui testar uma estratégia ousada e o sistema não compreendeu minha genialidade."
];

const btnDesculpa = document.getElementById('btn-desculpa');
const textoDesculpa = document.getElementById('texto-desculpa');

if(btnDesculpa) {
    btnDesculpa.addEventListener('click', () => {
        // Sorteia um número baseado no tamanho da lista de desculpas
        const random = Math.floor(Math.random() * desculpas.length);
        textoDesculpa.innerText = `"${desculpas[random]}"`;
    });
}


/* === 2. RELÓGIO DA HUMILHAÇÃO === */
// Coloque aqui a data que o grupo começou ou a data que você quiser zoar
const dataInicioZoeira = new Date('2023-04-15T00:00:00'); 

function atualizarCronometro() {
    const agora = new Date();
    const diferenca = agora - dataInicioZoeira;

    // Fazendo a matemática do tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Adiciona o "0" na frente de números menores que 10 (ex: 09:05)
    const h = horas < 10 ? '0' + horas : horas;
    const m = minutos < 10 ? '0' + minutos : minutos;
    const s = segundos < 10 ? '0' + segundos : segundos;

    const display = document.getElementById('cronometro');
    if(display) {
        display.innerHTML = `${dias} Dias <br> ${h}:${m}:${s}`;
    }
}
// Roda a função a cada 1 segundo (1000 milissegundos)
setInterval(atualizarCronometro, 1000);

const somPorJogador = {
    'diego': document.getElementById('som-diego'),
    'bola':  document.getElementById('som-bola'),
    'kaio':  document.getElementById('som-kaio'),
    'siri':  document.getElementById('som-siri'),
    'mark':  document.getElementById('som-mark'),
    'yago':  document.getElementById('som-yago'),
    'pato':  document.getElementById('som-pato'),
    'fulano':document.getElementById('som-fulano'),
};
// 3. Configura o clique nas fotos
avatares.forEach(foto => {
    foto.addEventListener('click', function () {
        if (modal && imagemAmpliada) {
            imagemAmpliada.src = this.src;
            modal.classList.add('ativo');
        }

        // Para todos os áudios antes de tocar o novo
        Object.values(somPorJogador).forEach(audio => {
            if (audio) { audio.pause(); audio.currentTime = 0; }
        });

        // Toca o áudio específico desse jogador
        const nome = (this.alt || '').toLowerCase();
        const som = somPorJogador[nome];
        if (som) som.play().catch(() => {});
    });
});

// Fecha modal e para o áudio
if (modal) {
    modal.addEventListener('click', () => {
        modal.classList.remove('ativo');
        Object.values(somPorJogador).forEach(audio => {
            if (audio) { audio.pause(); audio.currentTime = 0; }
        });
    });
}
/* -----------------------------------------------
   5. ORÁCULO DO CARTOLA (nova feature)
----------------------------------------------- */
const previsoes = [
    (a, b) => `Após consultar os astros: ${a} vai escalar capitão errado na rodada decisiva e chorar no grupo.`,
    (a, b) => `${b} começa favorito, mas vai implodir na última rodada. ${a} agradece e colhe os pontos.`,
    (a, b) => `${a} e ${b}? Os dois vão ser ultrapassados por alguém que ninguém apostava nada.`,
    (a, b) => `O Oráculo prevê: ${a} vai colocar um atacante no banco que fez hat-trick. Clássico.`,
    (a, b) => `${b} vai tentar, mas o Cartola não perdoa quem escalou bagre como capitão.`,
    (a, b) => `Revelação exclusiva: ${a} já escalou time errado 3x nessa temporada. A sequência continua.`,
    (a, b) => `A força está com ${a}. ${b}, por outro lado, vai escalar o cara que vai tá no banco.`,
    (a, b) => `${a} ganha, ${b} reclama no grupo das 23h. Cena clássica dos Piruletas.`,
    (a, b) => `O Oráculo vê ${b} confiando num jogador do Corinthians. Que Deus tenha misericórdia.`,
    (a, b) => `${a} vai crachar, mas vai deixar o melhor jogador da rodada no banco de reservas.`,
    (a, b) => `${b} vai esquecer de salvar o time. ${a} vai ganhar por WO do universo.`,
    (a, b) => `Ambos vão perder pra algum bagre inesperado. O Oráculo previu. Não diga que não avisamos.`,
];

const btnOraculo   = document.getElementById('btn-oraculo');
const textoOraculo = document.getElementById('texto-oraculo');

if (btnOraculo) {
    btnOraculo.addEventListener('click', () => {
        const p1val = document.getElementById('player1').value;
        const p2val = document.getElementById('player2').value;

        if (!p1val || !p2val) {
            textoOraculo.innerText = '⚠️ Escolha dois jogadores primeiro, cabaço!';
            return;
        }

        if (p1val === p2val) {
            textoOraculo.innerText = '🤔 Você não pode lutar contra si mesmo animal... ou pode?';
            return;
        }

        // Remove o emoji do início da string para pegar só o nome
        const nome1 = p1val.replace(/^\S+\s/, '').trim();
        const nome2 = p2val.replace(/^\S+\s/, '').trim();

        const idx = Math.floor(Math.random() * previsoes.length);
        textoOraculo.innerText = previsoes[idx](nome1, nome2);
    });
}