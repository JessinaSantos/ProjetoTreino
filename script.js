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

// function calcularMediaSimples(n1, n2) {
//   const media = (n1 + n2) / 2;
//   return media;
// }

// function calcularMediaComRecuperacao(n1, n2, recuperacao) {
//   const mediaRP = calcularMediaSimples(n1, n2);
//   const MediaFinal = (mediaRP + recuperacao) / 2;
//   if (mediaRP >= 7) {
//     console.log(mediaRP);
//   } else {
//     console.log(MediaFinal);
//   }
// }

// calcularMediaComRecuperacao(5, 9, 6);

// function somarNumeros(num1, num2) {
//   let soma = num1 + num2;
//   return soma;
// }

// console.log(somarNumeros(2, 7));

// function verificarPar(num1) {
//   if (num1 % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificarPar(3));

// const array = [10, 12, 34, 50];

// function mediaNumeros(array) {
//   return (array[0] + array[1] + array[2] + array[3]) / array.length;
// }

// console.log(mediaNumeros(array));

// function subtrair(num1, num2) {
//   return num1 - num2;
// }

// console.log(subtrair(10, 5));

// function multiplicar(num1, qtd) {
//   return num1 * qtd;
// }

// console.log(multiplicar(5, 2));
//---------------------------------------------------------------//-----------------------------------------------------
// const array = [2, 2, 2, 2];

// function somaArray(array) {
//   let soma = 0;
//   for (let i = 0; i < array.length; i++) {
//     soma += array[i];
//   }
//   return soma;
// }

// console.log(somaArray(array));

//---------------------------------------------------------------//-----------------------------------------------------

// let valor1 = "Olá";
// let valor2 = "Mundo";

// function concatenaString(valor1, valor2) {
//   return `${valor1}  ${valor2}`;
// }

// console.log(concatenaString(valor1, valor2));

// let nomes = ["Maria", "João", "Alan", "Fred"];
// let letra = "a";

// function filtraNomes(nomes, letra) {
//   for (let i = 0; i < nomes.length; i++) {
//     valorNomes = nomes[i];
//     if (letra in valorNomes) {
//       let novoArray = [valorNomes];
//     }
//   }
//   return novoArray;
// }

// console.log(filtraNomes(nomes, letra));

// let nomes = ["Maria", "João", "Alan", "Fred"];
// let letra = "a";

// function filtraNomes(nomes, letra) {
//   let novoArray = []; // Inicializa o array fora do loop
//   for (let i = 0; i < nomes.length; i++) {
//     if (nomes[i].includes(letra)) {
//       // Use includes para verificar a letra
//       novoArray.push(nomes[i]); // Adiciona ao novo array
//     }
//   }
//   return novoArray; // Retorna o array com os nomes filtrados
// }

// console.log(filtraNomes(nomes, letra)); // Saída: ["Maria", "João"]

// let classificacao = 2;

// function classificaMedalha(posicao) {
//   if (classificacao === 1) {
//     return "Ouro";
//   }
//   if (classificacao === 2) {
//     return "Prata";
//   }
//   if (classificacao === 3) {
//     return "Bronze";
//   } else {
//     return "Sem medalha";
//   }
// }

// console.log(classificaMedalha(classificacao));

// num = 9;
// function contagemRegressiva(num) {
//   for (i = 0; i < num.length; i++) {
//     let decremento = num - num[i];
//     return console.log(decremento);
//   }
// }
// contagemRegressiva(num);

// let array = [
//   { nome: "Ana", idade: 25 },
//   { nome: "Carlos", idade: 32 },
//   { nome: "Marina", idade: 19 },
// ];

// function listarNomes(array) {
//   let lista = [];
//   for (i = 0; i < array.length; i++) {
//     lista.push(array[i].nome);
//   }
//   return lista;
// }

// console.log(listarNomes(array));

// let array = [
//   { produto: "Camisa", preco: 59.9 },
//   { produto: "Calça", preco: 120 },
//   { produto: "Tênis", preco: 299.9 },
// ];

// function calcularTotalCarrinho(array) {
//   let valor = [];
//   let soma = 0;
//   for (let i = 0; i < array.length; i++) {
//     valor.push(array[i].preco);
//     soma = soma + valor[i];
//   }
//   return soma;
// }

// console.log(calcularTotalCarrinho(array));

// function calcularTotalCarrinho(array) {
//   let soma = 0;

//   for (let i = 0; i < array.length; i++) {
//     soma += array[i].preco;
//   }

//   return soma;
// }

// let array = [
//   { nome: "Lucas", idade: 17 },
//   { nome: "Fernanda", idade: 22 },
//   { nome: "João", idade: 15 },
// ];

// function filtrarMaioresDeIdade(array) {
//   let pessoas = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].idade >= 18) {
//       pessoas = array[i];
//     }
//   }
//   return pessoas.nome;
// }

// console.log(filtrarMaioresDeIdade(array));

// let array = [
//   { nome: "Notebook", preco: 3500 },
//   { nome: "Mouse", preco: 150 },
//   { nome: "Teclado", preco: 250 },
// ];

// function buscarProduto(array, produto) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i].nome === produto) {
//       return array[i];
//     }
//   }

//   return null;
// }

// console.log(buscarProduto(array, produto));

// function calcularPrecoProduto(array, produto, quantidade) {
//   let produtoEncontrado = buscarProduto(array, produto);
//   if (produtoEncontrado === null) {
//     return null;
//   }

//   return produtoEncontrado.preco * quantidade;
// }

// console.log(calcularPrecoProduto(array, produto, quantidade));


