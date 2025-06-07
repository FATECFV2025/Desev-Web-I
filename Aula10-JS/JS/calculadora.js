function calcular(operacao){
    // parseFloat: é uma função de conversão de texto para numeros decimais

    // document: pagina em html
    // getElementbyId: obter um elemento em HTML que tem um ID com um determinado valor
    // value: recuperar o valor que existe no componente
    let valor1 = parseFloat(document.getElementById("n1").value)
    let valor2 = parseFloat(document.getElementById("n2").value)

    let resultado

    if(operacao == 'somar'){
        resultado = valor1 + valor2
    }else if (operacao == 'subtrair'){
        resultado = valor1 - valor2
    }else if (operacao == 'multiplicar'){
        resultado = valor1 * valor2
    }else if (operacao == 'dividir'){
        resultado = valor1 / valor2
    }else {
        resultado='Operação inválida'
    }

    document.getElementById('resultado').innerText='Resultado: '+resultado

}