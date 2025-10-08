function IMC(peso,altura){
    return peso/(altura*altura)
}

function classificarIMC(imc){
    if(imc<18.5){
        return "abaixo do peso"
    }else if(imc<24.9){
        return "peso normal"
    }else if(imc<29.9){
        return "sobrepeso"
    }else if(imc<34.9){
        return "obesidade 1"
    }else if(imc<39.9){
        return "obesidade 2"
    }else if(imc<44.9){
        return "obesidade 3"
    }
}
let peso = 42;
let altura = 1.70;
let imc = IMC(peso,altura);
let classificacaoIMC = classificarIMC(imc);

console.log("IMC: ",imc);
console.log("Classificação do meu imc: ",classificacaoIMC)