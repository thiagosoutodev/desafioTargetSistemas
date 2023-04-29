// Resposta:

const sequenciaFibonacci = [0, 1]
let indice = 0

function calcularSequenciaFibonacci(numero) {
    
    while (numero >= sequenciaFibonacci[sequenciaFibonacci.length - 1]) {
        let novoElemento = sequenciaFibonacci[indice] + sequenciaFibonacci[indice + 1]
        sequenciaFibonacci.push(novoElemento)
        indice = indice + 1
    }

    console.log(sequenciaFibonacci)

    if (sequenciaFibonacci.includes(numero)) {
        return `\nO número ${numero} pertence à sequência de Fibonacci.`
    } else {
        return `\nO número ${numero} não pertence à sequência de Fibonacci.`
    }
}

let numeroExemplo1 = 57
let numeroExemplo2 = 13
let numeroExemplo3 = 92

console.log(calcularSequenciaFibonacci(numeroExemplo1))
console.log(calcularSequenciaFibonacci(numeroExemplo2))
console.log(calcularSequenciaFibonacci(numeroExemplo3))