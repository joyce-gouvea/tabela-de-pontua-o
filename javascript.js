var amane = {
  nome: "J1",
  imagem:
    "https://www.svgrepo.com/show/23012/profile-user.svg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var juh = {
  nome: "J2",
  imagem:
    "https://www.svgrepo.com/show/23012/profile-user.svg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var net = {
  nome: "J3",
  imagem:
    "https://www.svgrepo.com/show/23012/profile-user.svg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [amane, juh, net];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr class='campos-tabela'><td class='campos-tabela'>" + jogadores[i].nome + "</td>";
    elemento += "<td class='campos-tabela'>" + "<img class='img-usuario' src=" + jogadores[i].imagem + "/>" + "</td>";
    elemento += "<td class='campos-tabela'>" + jogadores[i].vitorias + "</td>";
    elemento += "<td class='campos-tabela'>" + jogadores[i].empates + "</td>";
    elemento += "<td class='campos-tabela'>" + jogadores[i].derrotas + "</td>";
    elemento += "<td class='campos-tabela'>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td class='campos-tabela'><button class='botao-acao botao-padrao' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td class='campos-tabela'><button class='botao-acao botao-padrao' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td class='campos-tabela'><button class='botao-acao botao-padrao' onClick='removerJogador(" +
      i +
      ")'>Remover jogador(a)</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var vitoria = i;
  for (var x = 0; x < jogadores.length; x++) {
    var jogador = jogadores[x];
    if (x == vitoria) {
      jogador.vitorias++;
    } else {
      jogador.derrotas++;
    }
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var empate = i;
  for (var x = 0; x < jogadores.length; x++) {
    var jogador = jogadores[x];
    if (x == empate) {
      jogador.empates++;
    } else {
      jogador.empates++;
    }
    jogador.pontos = calculaPontos(jogador);
  }

  exibeJogadoresNaTela(jogadores);
}

function removerJogador(i) {
  jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}

function limparCampos() {
  for (var x = 0; x < jogadores.length; x++) {
    jogadores[x].vitorias = 0;
    jogadores[x].empates = 0;
    jogadores[x].derrotas = 0;
    jogadores[x].pontos = 0;
  }

  exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
  var nomeNovoJogador = document.getElementById("nomeNovoJogador").value;
  var imagemNovoJogador = document.getElementById("imagemNovoJogador").value;

  jogadores.push({
    nome: nomeNovoJogador,
    imagem: imagemNovoJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });

  exibeJogadoresNaTela(jogadores);
  document.getElementById("nomeNovoJogador").value = "";
  document.getElementById("imagemNovoJogador").value = "";
}