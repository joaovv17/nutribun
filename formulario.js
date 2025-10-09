//acessa o botao
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//executa o codigo ao acionar o botao
botaoAdicionar.addEventListener('click', function(event){
event.preventDefault();

//acessa o formulario\\
var formulario = document.querySelector("#form-adiciona");

var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//é pra criar a tag tr da tabela 
var pacienteTr = document.createElement("tr");
//é pra criar a tag td da tabela 
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");
//adiciona os valores
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calcularIMC(peso,altura);

//aiciona o conteudo
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

});