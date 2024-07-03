const prompt = require('prompt-sync')();
function calculadora(){
    let operacao = prompt("Escolha a operaçao: - Adição digite '1' - Subtração digite '2' - Multiplicação digite '3' - Divisão digite'4' - Porcentagem digite '5' ");

    switch (operacao) {
        case "1":
            calcularadicao()
            break;
        case "2":
            calcularsubtracao()
            break;
        case "3":
            calcularmultiplicacao()
            break; 
        case "4":
            calculardivisao()
            break;
        case "5":
            calcularporcentagem()
            break;
        default:
            console.log("Operacão inválida. Por favor, escolha umas das opcões válidas.")
            exibir(); 
    }
}
function calcularadicao() {
    let num1 = +prompt("Digite o primeiro algarismo: ");
    let num2 = +prompt("Digite o segundo algarismo: ");
    
    let resultado = Number(num1) + Number(num2);
    console.log("Resposta: ", resultado);
    exibir();
}

function calcularsubtracao(){
    let num1 = +prompt("Digite o primeiro algarismo: ");
    let num2 = +prompt("Digite o segundo algarismo: ");
    
    let resultado = Number(num1) - Number(num2);
    console.log("Resposta: ", resultado);
    exibir();

}
function calcularmultiplicacao(){
    let num1 = +prompt("Digite o primeiro algarismo: ");
    let num2 = +prompt("Digite o segundo algarismo: ");

    let resultado = Number(num1) * Number(num2);
    console.log("Resposta: ", resultado);
    exibir();
}
function calculardivisao(){
    let dividendo = +prompt("Digite o primeiro algarismo: ");
    let divisor = +prompt("Digite o segundo algarismo: ");

    if  (Number(divisor) !== 0) {
        let resultado = Number(dividendo) / Number(divisor);
        console.log("Resposta: ", resultado);
    }else {
        console.log("Erro divisão por zero.")
    }
    exibir();
}
function calcularporcentagem(){
    let numero = +prompt("Digite o numero: ");
    let porcentagem = +prompt("Digite a porcentagem a ser calculada: ");
    
    let resultado = (Number(porcentagem)/100)* Number(numero);
    console.log("Resultado da porcentagem: ", resultado);
    console.log("Resposta: ");
    exibir();
}
function exibir(){
    let continuar = prompt("Deseja fazer outra operação. Sim ou não?");
    if(continuar === 's'){
        calculadora();
    } else if (continuar === 'n') {
        return;
    } else {
        console.log("Opção invalida. Didite 's' para sim e 'n' para não")
        exibir();
    }
}
    calculadora();