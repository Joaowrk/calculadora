let visor = document.querySelector('#valorOperacao');

let operacaoAtual = '';
let valorAnterior = '';
let operador = '';

function atualizarVisor(valor){
    visor.textContent = valor;
}

const botoesNumeros = document.querySelectorAll('#botao0, #botao1, #botao2, #botao3, #botao4, #botao5, #botao6, #botao7, #botao8, #botao9');

botoesNumeros.forEach(botao =>{
    botao.addEventListener('click', () => {
        operacaoAtual += botao.textContent;
        atualizarVisor(operacaoAtual);
    });
});

document.querySelector('#virgula').addEventListener('click', () =>{
    if(!operacaoAtual.includes('.')) {
        operacaoAtual += '.';
        atualizarVisor(opreacaoAtual);
    }
})

document.querySelector('#somar').addEventListener('click', () => definirOperador('+'));
document.querySelector('#subtrair').addEventListener('click', () => definirOperador('-'));
document.querySelector('#multiplicar').addEventListener('click', () => definirOperador('*'));
document.querySelector('#dividir').addEventListener('click', () => definirOperador('/'));

function definirOperador(op) {
    if (operacaoAtual ==='') return;
    valorAnterior = operacaoAtual;
    operador = op;
    operacaoAtual = '';
}

document.querySelector('#igual').addEventListener('click', () => {
    if (valorAnterior ==='' || operacaoAtual ==='' || operador ==='') return;
    let resultado;

    const n1 = parseFloat(valorAnterior);
    const n2 = parseFloat(operacaoAtual);

    switch (operador) {
        case '+': resultado = n1 + n2; break;
        case '-': resultado = n1 - n2; break;
        case '*': resultado = n1 * n2; break;
        case '/': resultado = n1 / n2; break;
    }

    atualizarVisor(resultado);
    operacaoAtual = resultado.toString();
    valorAnterior = '';
    opreador = '';
});

document.querySelector('#apagar').addEventListener('click', () => {
    operacaoAtual = '';
    valorAnterior = '';
    operador = '';
    atualizarVisor('0');
});