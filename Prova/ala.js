function Vai(){
    produto1 = document.getElementById("produto1").value
    console.log(produto1)
    produto2 = document.getElementById("produto2").value
    valorpagar = document.getElementById("valorpagar").value
    // resposta = document.getElementById("resposta").value

    


    soma = produto1 + produto2

    diferença = valorpagar - soma
    if(diferença > 0){
    document.getElementById("p").textContent = `Voce comprou 2 produtos O total foi Rs`

    } else{

    }

    
    
    

}