// muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "Barboza Nutrição";

//acessar a tag tr -menos o  paciente Paulo
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0;i < pacientes.length; i++){
    paciente = pacientes[i];
// Seleciona o conteúdo do peso da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//Seleciona o conteúdo altura da tag
var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

//calcula o imc
var imc = peso/ (altura*altura);
imc = imc.toFixed(2);
//variaveis com valor true
var pesoValido = true ;
var alturaValida = true; 

if(pesoValido && alturaValida){
    // acessa e altera o imc
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
}
if(peso <= 0 || peso >= 1000){
var pesoValido = false;
tdImc.textContent = "peso invalido";
paciente.classList.add("campo-invalido");
}
if(altura < 0 || altura > 3.00){
   
   var alturaValida =false ;
   tdImc.textContent = "altura invalida";
   paciente.classList.add("campo-invalido");
}

}
titulo.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    alert("Este elemento foi clicado");
}
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
imcTd.textContent = imc;
});
