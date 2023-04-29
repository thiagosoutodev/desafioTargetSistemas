// Resposta:

function inverterString(palavra) {
    let palavraInvertida = ""
    
    for (let i = (palavra.length - 1); i >= 0; i--) {
        palavraInvertida = palavraInvertida + palavra[i]
    }

    return palavraInvertida
}

let palavraExemplo1 = "Thiago"
let palavraExemplo2 = "Brasil"
let palavraExemplo3 = "orangotango"

console.log(inverterString(palavraExemplo1))
console.log(inverterString(palavraExemplo2))
console.log(inverterString(palavraExemplo3))