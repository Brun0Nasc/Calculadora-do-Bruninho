var operacao = []
var operadores = []
var operando = document.getElementById("operando")
var resposta = document.getElementById("resposta")
var n = ''

function addNum(num){
    if(n == ''){
        operando.innerText = num
        n = num
    } else{
        operando.innerText += num
        n += num
    }
}

function operar(op){
    if(op == "="){
        operacao.push(Number(n))
        var resp = 0
        for(var i = 0; i < operacao.length; i++){
            if(i == 0){
                resp += operacao[0]
            } else{
                if(operadores[i-1] == "+"){
                    resp += operacao[i]
                } else if(operadores[i-1] == "-"){
                    resp -= operacao[i]
                } else if(operadores[i-1] == "x"){
                    resp *= operacao[i]
                } else if(operadores[i-1] == "÷"){
                    resp /= operacao[i]
                }
            }
        }
        resposta.innerText = resp
        operando.innerText = '0'
        n = ''
        operacao = []
        operadores = []
    } else{
        operacao.push(Number(n))
        operadores.push(op)
        operando.innerText += op
        n = '0'
    }
}