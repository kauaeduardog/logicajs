function maiorOuIgual(n1, n2){
    if(n1>n2){
        return "o primeiro é maior que o segundo";
    }else if(n1==n2){
        return "o primeiro número é igual ao segundo"
    }else{
        return "o primeiro número é menor que o segundo"
    }
}


console.log(maiorOuIgual(16, 15));