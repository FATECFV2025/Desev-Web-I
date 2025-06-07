    
let valor1 = document.getElementById('n1').value //objeto
let valor2 = document.getElementById('n2').value //objeto

document.getElementById("somar").addEventListener('click', function (){
   let resultado = valor1 + valor2;
   document.getElementById('resultado').innerText='Resultado: '+resultado
})

// document: HTML
// getElementoById: Function em JS para Localizar no HTML um elemento que possui um ID

document.getElementById('subtrair').addEventListener('click', function(){
     let resultado = valor1 - valor2;
   document.getElementById('resultado').innerText='Resultado: '+resultado
} )

document.getElementById('dividir').addEventListener('click', function(){
   let resultado = valor1 / valor2;
   document.getElementById('resultado').innerText='Resultado: '+resultado
} )

document.getElementById('multiplicar').addEventListener('click', function(){
    let resultado = valor1 * valor2
    document.getElementById('resultado').innerText='Resultado: '+resultado
} )

// Toda vez que recupera um elemento no HTML é retornado um Objeto
function calcular(operacao){
    let valor1 = document.getElementById('n1').value //objeto
    let valor2 = document.getElementById('n2').value //objeto

    // todo componente HTML possui propriedades
    // Por exemplo o value para <input>
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




function calcularOld(operacao){
    console.log(operacao)
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