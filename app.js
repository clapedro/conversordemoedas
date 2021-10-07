/*
funções
    funções do js
alert()
console.log()

funções personalizadas
- funções criadas pela pessoa que esta desenvolvendo
- a função precisa ser chamada para ser executada
- para criar uma função usamos a palavra function

function 
function abacaxi(){

}





function EscreverFrases(texto){

    console.log(texto)


}

EscreverFrases("Tudo sei que nada sei")
EscreverFrases("Sozinho vou rápido, juntos vamos longe")

*/
// parseFloat --> converte de texto para decimal
// parseInt --> converte de texto para inteiro

function Converter(){
    //DOM - Document Object Model
    // let valorEmDolar = document.getElementById("valor").value
    //pegar valor do campo:
    let valorEmDolar = document.querySelector("#valor").value


    /** Converter o valor do campo em número */
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar


    /** Inserir o resultado na tela */
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal.toFixed(2)

}


