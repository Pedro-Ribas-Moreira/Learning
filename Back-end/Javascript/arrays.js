let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, "Pedro", 2, "Amanda", 3, "Zoe"];

// concat()
// Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
// Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
let concatArr = arr1.concat(arr2);
console.log(`concact array = ${concatArr}`);

// filter()
// Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
// Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

let filteredArr = arr1.filter((e) => e % 2 === 0);
console.log(`filter() - show only numbers even ${filteredArr}`);

// find()
// Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

let findInArr = arr2.find((e) => e === "Pedro");
// console.log(findInArr);
console.log(`find() me = ${findInArr}`);

// findIndex()
// Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

let findIndexAarr = arr2.findIndex((e) => e === "Zoe");
console.log(findIndexAarr);

// indexOf()
// Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna -1.
console.log(arr1.indexOf("Pedro"));
console.log(arr2.indexOf("Pedro"));

// lastIndexOf()
// Funciona da mesma forma que o indexOf(), porém retorna o índice referente à última ocorrência de um valor em um array, varrendo o array de trás para frente.
console.log(arr1.lastIndexOf(3));
console.log(arr2.lastIndexOf(3));

// forEach()
// Executa uma função em cada elemento do array de forma individual.
// Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
arr1.forEach((e) => console.log(`for each - ${e + e}`));

// pop()
// Retira o último elemento do array.
// Altera o array original removendo o elemento.

console.log(arr1.pop());

// shift()
// Retira o primeiro elemento do array.
// Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
console.log(arr1.shift());
// push()
// Adiciona o elemento passado como parâmetro do array, porém na última posição.
// Altera o array original com o novo valor.
console.log(arr1.push("Pedro"));
// unshift()
// Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
// Altera o array original com o novo valor.
console.log(arr1.push("Amanda"));

// reduce()
// Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) =>
  previousValue * currentValue + 1;
console.log(`reducer: ${array1.reduce(reducer)}`);
console.log(`reducer: ${array1.reduce(reducer, 5)}`);
console.log(`reducer: ${array1.reduce(reducer, 10)}`);

// reduceRight()
// Funciona igual o reduce() porém começa do final do array e segue até o início.

console.log(`reducer Right: ${array1.reduceRight(reducer)}`);
console.log(`reducer Right: ${array1.reduceRight(reducer, 5)}`);
console.log(`reducer Right: ${array1.reduceRight(reducer, 10)}`);

// reverse()
// Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
console.log(arr1);
console.log(arr1.reverse());
// slice()
// Copia uma parte do array para outro array.
console.log(arr1.slice(0, arr1.length / 2));
console.log(arr1.slice(arr1.length / 2));

// sort()
// Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
console.log(arr1.sort());
// splice()
// Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
console.log(arr1.splice(arr1.length - 2, 2));
console.log(arr1);
