const numeroWhatsApp = "558007655512"; // ALTERAR

function alterar(botao, valor) {
let span = botao.parentElement.querySelector(".valor");
let atual = parseInt(span.innerText);
atual += valor;
if (atual < 0) atual = 0;
span.innerText = atual;
calcular();
}

function calcular() {
let itens = document.querySelectorAll(".item");
let perfil = parseFloat(document.getElementById("perfil").value);

let total = 0;
let qtdTotal = 0;

itens.forEach(i => {
let qtd = parseInt(i.querySelector(".valor").innerText);
let consumo = parseFloat(i.dataset.consumo);
total += qtd * consumo;
qtdTotal += qtd;
});

let simultaneidade = 1.8;
if (qtdTotal <= 3) simultaneidade = 1.5;
if (qtdTotal >= 10) simultaneidade = 1.2;

total = Math.round(total * perfil * simultaneidade);

document.getElementById("total").innerText = total + " Mbps";
recomendarPlano(total);
atualizarBarra(total);
atualizarWhatsApp(total);
}

function recomendarPlano(total){
let plano = "";

if (total <= 300) plano = "Plano recomendado: 300 Mbps";
else if (total <= 700) plano = "Plano recomendado: 700 Mbps";
else if (total <= 800) plano = "Plano recomendado: 800 Mbps";
else plano = "Plano recomendado: 1000 Mbps";

document.getElementById("plano").innerText = plano;
}

function atualizarBarra(total){
let porcentagem = total / 1000 * 100;
if (porcentagem > 100) porcentagem = 100;
document.getElementById("progresso").style.width = porcentagem + "%";
}

function atualizarWhatsApp(total){
let mensagem = `Olá, fiz a simulação no site e meu consumo estimado é de ${total} Mbps. Gostaria de mais informações sobre os planos.`;
let link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
document.getElementById("whatsappBtn").href = link;
}

document.getElementById("perfil").addEventListener("change", calcular);







