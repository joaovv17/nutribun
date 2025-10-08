def calcular_imc(peso,altura):
    return peso/(altura*altura)

def classificar_imc(imc):
    if imc <18.5:
        return "abaixo do peso"
    elif imc <24.9:
        return"peso normal"
    elif imc <29.9:
        return"sobrepeso"
    elif imc <34.9:
        return"obesidade 1"
    elif imc <39.9:
        return"obesidade 2"
    elif imc <44.9:
        return"obesidade 3"
    
peso = 42
altura = 1.70
imc = calcular_imc(peso,altura)
classificacaoIMC = classificar_imc(imc)

print("IMC: ",imc)
print("Classificação: ",classificacaoIMC)
