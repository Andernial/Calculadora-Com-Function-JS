
function soma(a,b){
    return a + b 
}

function subt(a,b){
    return a - b
}

function mult(a,b){
    return a * b
}

function divs(a,b){
    return a / b
}

function verificaOp(a,b,operacao){
    if(operacao === "+"){
        return soma(a,b)
    }else if(operacao === "-"){
        return subt(a,b)
    }else if(operacao === "x"){
        return mult(a,b)
    }else if(operacao === "/"){
        return divs(a,b)
    }
}

function calcular(){
    var n1 = parseInt(document.getElementById('n1').value)
    var n2 = parseInt(document.getElementById('n2').value)
    var oP = document.getElementById('operação').value

     document.getElementById('result').value = verificaOp(n1,n2,oP)
}