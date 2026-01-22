// const teste = {
//   nome: "Jessy",
//   idade: 25,
//   status: "casada",
// };

// teste.idade = 26;

// teste.teste2 = "Ola";

// console.log(teste);

// delete teste.teste2;
// console.log(teste);

// let array = ["laranja", "maçã", "uva"];
// console.log(array[2]);

// array[2] = "melancia";
// console.log(array[2]);

// let clentes = ["maria", "joão", "joaquim"];
// clentes[3] = "joana";
// console.log(clentes);

// delete clentes[3];
// console.log(clentes);

// let produto = {
//   nome: "suco",
//   preço: 12,
//   quantidade: 10,
// };

// console.log(produto.nome);

// produto.preço = 15;
// console.log(produto);

// let venda = {
//   cliente: "jessy",
//   produto: "fruta",
//   valor: 15,
// };

// venda.data = "18/01/2026";
// console.log(venda);

// delete venda.produto;
// console.log(venda);

// let estoque = [12, 20, 10, 50];
// let novoEstoque = [...estoque];
// novoEstoque[0] = 10;
// console.log(novoEstoque);
// console.log(estoque);

// function saudacao(nome) {
//   console.log(`Olá ${nome}. Seja bem vindo`);
// }

// saudacao("Jessy");

// let nome = "Jessy";
// let preco = 10;
// let qtd = 2;
// let total = preco * qtd;
// function teste() {
//   console.log(total);
// }

// teste();

// Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
// cálculo).

// function media(nota1, nota2, nota3) {
//   let resultado = (nota1 + nota2 + nota3) / 3;
//   return resultado;
// }

// console.log(`A média desse aluno é ${media(8, 6, 4)}`);

// Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final. O cálculo deve ser o seguinte: média_final = (média_antes_da_pf + pf)/2

// Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
// necessário.
// Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
// resultado do cálculo).

// function calcularMedia(nota1, nota2, nota3) {
//   const mediaInicial = (nota1, nota2, nota3) / 3;
//   return mediaInicial;
// }

// function calcularMediaFinal(nota1, nota2, nota3, nota4) {
//   const media_semPF = calcularMedia(nota1, nota2, nota3);
//   const mediaFinal = (media_semPF + nota4) / 2;
//   console.log(`a média final do aluno é ${mediaFinal}`);
// }

// calcularMediaFinal(8, 9, 2, 4);

// function calcularDesconto(valor, percentual) {
//   let desconto = valor * (percentual / 100);

//   return desconto;
// }

// function calcularPrecoFinal(valor, percentual) {
//   let descontoIncial = calcularDesconto(valor, percentual);
//   let valorFinal = valor - descontoIncial;
//   return valorFinal;
// }

// function mostrarPreco(valor, percentual) {
//   console.log(calcularPrecoFinal(valor, percentual));
// }

// mostrarPreco(100, 50);

// function calcularHorasTrabalhadas(horasPorDia, diasTrabalhados) {
//   const horasTotais = horasPorDia * diasTrabalhados;
//   return horasTotais;
// }

// function calcularSalarioBruto(horasTotais, valorHora) {
//   const salarioBruto = horasTotais * valorHora;
//   return salarioBruto;
// }

// function calcularSalarioLiquido(horasPorDia, diasTrabalhados, valorHora) {
//   const horasTotais = calcularHorasTrabalhadas(horasPorDia, diasTrabalhados);
//   const salarioFinal = calcularSalarioBruto(horasTotais, valorHora);
// }
// console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);
// calcularSalarioLiquido(8, 22, 25);

function calcularMediaSimples(n1, n2) {
  const media = (n1 + n2) / 2;
  return media;
}

function calcularMediaComRecuperacao(n1, n2, recuperacao) {
  const mediaRP = calcularMediaSimples(n1, n2);
  const MediaFinal = (mediaRP + recuperacao) / 2;
  if (mediaRP >= 7) {
    console.log(mediaRP);
  } else {
    console.log(MediaFinal);
  }
}

calcularMediaComRecuperacao(5, 9, 6);
